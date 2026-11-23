#!/usr/bin/env python3
"""Validate the house-plan catalog and pages without sending contact forms."""
import asyncio
import hashlib
import json
import os
from pathlib import Path
from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parents[1]
REVIEW = Path(os.environ.get('MORSE_TEST_OUTPUT_DIR', str(ROOT / 'review/additional-house-plans')))
BASE = os.environ.get('MORSE_TEST_BASE_URL', 'http://127.0.0.1:3000')
source = (ROOT / 'client/src/housePlans.ts').read_text()
raw = source.split('export const HOUSE_PLANS: HousePlan[] = ', 1)[1].split('\n];', 1)[0]
PLANS = json.loads(raw + '\n]')
FEATURED = ['maple', 'modern', 'willow', 'hollow']

async def main():
    REVIEW.mkdir(parents=True, exist_ok=True)
    report = {'baseURL': BASE, 'pages': [], 'responsive': [], 'downloads': [], 'errors': []}
    async with async_playwright() as p:
        browser = await p.chromium.launch(executable_path='/usr/bin/chromium', args=['--no-sandbox'])
        context = await browser.new_context(viewport={'width': 1440, 'height': 1000}, accept_downloads=True)
        page = await context.new_page()
        page.on('pageerror', lambda error: report['errors'].append(str(error)))
        await page.goto(BASE + '/', wait_until='networkidle')
        cards = page.locator('#plans a[href^="/plans/"]')
        assert await cards.count() == 4
        assert await cards.evaluate_all('(els) => els.map(e => e.getAttribute("href").split("/").pop())') == FEATURED
        assert '14 designs' in await page.locator('#plans').inner_text()
        await page.get_by_role('link', name='View All House Plans', exact=True).click()
        await page.wait_for_url('**/plans')
        await page.wait_for_load_state('networkidle')
        assert await page.title() == 'House Plans | Morse Construction'
        catalog = page.locator('#all-house-plans a[href^="/plans/"]')
        assert await catalog.count() == 14
        titles = await catalog.locator('h3').all_text_contents()
        assert titles == sorted(plan['name'] for plan in PLANS)
        for img in await catalog.locator('img').all():
            await img.scroll_into_view_if_needed()
            await img.evaluate('(img) => img.decode()')
        report['catalogCount'] = 14
        report['homepageCount'] = 4
        print('PASS catalog: fourteen designs, alphabetic order, loaded thumbnails, four homepage highlights', flush=True)

        for plan in PLANS:
            slug, title = plan['slug'], plan['name']
            response = await page.goto(f'{BASE}/plans/{slug}', wait_until='networkidle')
            assert response.status == 200
            assert await page.locator('h1').inner_text() == title
            assert await page.title() == f'{title} House Plan | Morse Construction'
            expected = len(plan['floors'])
            assert await page.get_by_role('link', name='Download PDF', exact=True).count() == expected
            for image in await page.locator('main img').all():
                await image.scroll_into_view_if_needed()
                await image.evaluate('(img) => img.decode()')
                assert await image.evaluate('(img) => img.naturalWidth > 0')
            links = page.get_by_role('link', name='Download PDF', exact=True)
            for i in range(expected):
                link = links.nth(i)
                href = await link.get_attribute('href')
                async with page.expect_download() as info:
                    await link.click()
                download = await info.value
                downloaded_path = await download.path()
                original = ROOT / 'client/public' / href.lstrip('/')
                assert hashlib.sha256(Path(downloaded_path).read_bytes()).digest() == hashlib.sha256(original.read_bytes()).digest()
                report['downloads'].append(href)
            await page.get_by_role('button', name='Enlarge', exact=True).first.click()
            dialog = page.get_by_role('dialog')
            assert await dialog.is_visible()
            await dialog.get_by_role('button', name='Zoom in', exact=True).click()
            assert await dialog.get_by_text('150%', exact=True).is_visible()
            await page.keyboard.press('Escape')
            await dialog.wait_for(state='hidden')
            assert await page.get_by_role('link', name='Back to House Plans', exact=True).get_attribute('href') == '/plans'
            await page.get_by_role('link', name='Back to House Plans', exact=True).click()
            await page.wait_for_url('**/plans')
            assert await page.locator('#all-house-plans a[href^="/plans/"]').count() == 14
            await page.get_by_role('link', name=f'View {title} photos and floor plans', exact=True).click()
            await page.wait_for_url(f'**/plans/{slug}')
            await page.get_by_role('link', name='Inquire About This Plan', exact=True).first.click()
            await page.wait_for_url('**/?plan=' + slug + '#contact')
            await page.wait_for_function('(name) => document.querySelector("#contact input[name=planInterest]").value === name', arg=title)
            await page.wait_for_load_state('networkidle')
            assert await page.get_by_text('Inquiring about house plan: ' + title, exact=True).is_visible()
            report['pages'].append({'slug': slug, 'floorPlans': expected, 'imagesLoaded': True, 'inquiryPassed': True})
            print(f'PASS {title}: direct route, photo/drawings, PDF(s), enlargement, zoom, inquiry', flush=True)

        for width in [1440, 1280, 1024, 768, 375]:
            await page.set_viewport_size({'width': width, 'height': 1000})
            for path, label in [('/plans', 'catalog'), ('/plans/modern', 'modern'), ('/', 'home')]:
                await page.goto(BASE + path, wait_until='networkidle')
                assert not await page.evaluate('document.documentElement.scrollWidth > innerWidth'), (label, width)
                if label == 'home':
                    await page.locator('#plans').screenshot(path=str(REVIEW / f'homepage-plans-{width}.png'), style='header { visibility: hidden !important; }')
                else:
                    await page.screenshot(path=str(REVIEW / f'{label}-{width}.png'))
                report['responsive'].append({'page': label, 'width': width, 'overflow': False})
            print(f'PASS responsive homepage/catalog/Modern at {width}px', flush=True)

        await page.set_viewport_size({'width': 1440, 'height': 1000})
        await page.goto(BASE + '/plans', wait_until='networkidle')
        await page.screenshot(path=str(REVIEW / 'catalog-desktop-full.png'), full_page=True)
        await page.goto(BASE + '/plans/modern', wait_until='networkidle')
        await page.screenshot(path=str(REVIEW / 'modern-desktop-full.png'), full_page=True)
        await page.goto(BASE + '/plans/not-a-design', wait_until='networkidle')
        assert not await page.get_by_role('link', name='Download PDF', exact=True).count()
        report['unknownPlanHandled'] = True
        await browser.close()
    assert len(report['downloads']) == 19
    assert not report['errors'], report['errors']
    (REVIEW / 'test-results.json').write_text(json.dumps(report, indent=2) + '\n')
    print('All fourteen plan pages and nineteen PDF downloads passed. No contact submissions sent.', flush=True)

if __name__ == '__main__':
    asyncio.run(main())

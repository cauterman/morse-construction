#!/usr/bin/env python3
"""Validate the house-plan update against a running local Vite server."""
import asyncio
import hashlib
import json
from pathlib import Path
from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parents[1]
REVIEW = ROOT / 'review/house-plans'
BASE = 'http://127.0.0.1:3000'
SLUGS = ['brownstone', 'hollow', 'lockwood', 'maple', 'newport', 'pine', 'ridge', 'saffron']

async def main():
    REVIEW.mkdir(parents=True, exist_ok=True)
    report = {'pages': [], 'responsive': [], 'downloads': [], 'errors': []}
    async with async_playwright() as p:
        browser = await p.chromium.launch(executable_path='/usr/bin/chromium', args=['--no-sandbox'])
        context = await browser.new_context(viewport={'width': 1440, 'height': 1000}, accept_downloads=True)
        page = await context.new_page()
        page.on('pageerror', lambda error: report['errors'].append(str(error)))
        await page.goto(BASE, wait_until='networkidle')
        cards = page.locator('#plans a[href^="/plans/"]')
        assert await cards.count() == 8, 'Homepage must show eight real design cards'
        assert not await page.locator('#plans').get_by_text('The Byrne', exact=True).count()
        cover = page.get_by_role('button', name='Play Morse Construction building journey video')
        assert 'maple-exterior.webp' in await cover.locator('img').get_attribute('src')
        await page.locator('#plans').screenshot(path=str(REVIEW / 'homepage-plans-desktop.png'), style='header { visibility: hidden !important; }')

        for slug in SLUGS:
            await page.goto(f'{BASE}/plans/{slug}', wait_until='networkidle')
            title = await page.locator('h1').inner_text()
            assert title == 'The ' + slug.title(), (slug, title)
            assert await page.title() == f'{title} House Plan | Morse Construction'
            expected = 2 if slug == 'hollow' else 1
            assert await page.get_by_role('link', name='Download PDF', exact=True).count() == expected
            for image in await page.locator('main img').all():
                await image.scroll_into_view_if_needed()
                await image.evaluate('(img) => img.decode()')
                assert await image.evaluate('(img) => img.naturalWidth > 0')
            report['pages'].append({'slug': slug, 'title': title, 'floorPlans': expected, 'imagesLoaded': True})
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
            await page.get_by_role('link', name='Inquire About This Plan', exact=True).first.click()
            await page.wait_for_url('**/?plan=' + slug + '#contact')
            await page.wait_for_function('(name) => document.querySelector("#contact input[name=planInterest]").value === name', arg=title)
            await page.wait_for_load_state('networkidle')
            assert await page.get_by_text('Inquiring about house plan: ' + title, exact=True).is_visible()
            assert await page.locator('#contact').evaluate('(el) => el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().top < window.innerHeight / 2')
            print(f'PASS {title}: route, images, PDF(s), enlargement, zoom, inquiry', flush=True)

        for width in [1440, 1280, 1024, 768, 375]:
            await page.set_viewport_size({'width': width, 'height': 1000})
            await page.goto(f'{BASE}/plans/hollow', wait_until='networkidle')
            overflow = await page.evaluate('document.documentElement.scrollWidth > window.innerWidth')
            assert not overflow, f'Horizontal overflow on detail page at {width}px'
            await page.screenshot(path=str(REVIEW / f'hollow-{width}.png'), full_page=True)
            await page.goto(BASE, wait_until='networkidle')
            await page.locator('#plans').scroll_into_view_if_needed()
            overflow = await page.evaluate('document.documentElement.scrollWidth > window.innerWidth')
            assert not overflow, f'Horizontal overflow on homepage at {width}px'
            await page.locator('#plans').screenshot(path=str(REVIEW / f'homepage-plans-{width}.png'), style='header { visibility: hidden !important; }')
            report['responsive'].append({'width': width, 'horizontalOverflow': False})
            print(f'PASS responsive {width}px', flush=True)

        await page.set_viewport_size({'width': 1440, 'height': 1000})
        await page.goto(BASE, wait_until='networkidle')
        await cover.scroll_into_view_if_needed()
        await cover.screenshot(path=str(REVIEW / 'video-cover.png'))
        await cover.click()
        iframe = page.locator('iframe[title="Morse Construction Video"]')
        await iframe.wait_for()
        assert 'UHObSEb5XvI?autoplay=1' in await iframe.get_attribute('src')
        await page.goto(f'{BASE}/plans/not-a-design', wait_until='networkidle')
        assert not await page.get_by_role('link', name='Download PDF', exact=True).count()
        report['videoCoverAndPlaybackLink'] = True
        report['unknownPlanHandled'] = True
        await browser.close()
    (REVIEW / 'test-results.json').write_text(json.dumps(report, indent=2) + '\n')
    assert not report['errors'], report['errors']
    print('All house-plan update browser tests passed. No contact form submissions were sent.', flush=True)

if __name__ == '__main__':
    asyncio.run(main())

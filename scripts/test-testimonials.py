#!/usr/bin/env python3
"""Test the Morse testimonial update without sending forms or changing production."""
import asyncio
import json
import os
from pathlib import Path
from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parents[1]
BASE = os.environ.get('MORSE_TEST_BASE_URL', 'http://127.0.0.1:3000')
REVIEW = ROOT / 'review/testimonials'
source = (ROOT / 'client/src/testimonials.ts').read_text()
DATA = json.loads(source.split('export const TESTIMONIALS: Testimonial[] = ', 1)[1].rstrip().removesuffix(';'))

async def select(page, item):
    button = page.get_by_role('button', name='Show testimonial from ' + item['author'], exact=True)
    await button.click()
    await page.wait_for_function('(id) => document.querySelector(`[data-testimonial-id="${id}"]`).parentElement.getAttribute("aria-hidden") === "false"', arg=item['id'])
    await page.wait_for_function('(name) => [...document.querySelectorAll("#testimonials button")].some(el => el.getAttribute("aria-label") === "Show testimonial from " + name && el.getAttribute("aria-current") === "true")', arg=item['author'])

async def main():
    REVIEW.mkdir(parents=True, exist_ok=True)
    report = {'baseURL': BASE, 'testimonials': [], 'responsive': [], 'errors': []}
    async with async_playwright() as p:
        browser = await p.chromium.launch(executable_path='/usr/bin/chromium', args=['--no-sandbox'])
        context = await browser.new_context(viewport={'width': 1440, 'height': 1000}, reduced_motion='reduce', has_touch=True)
        page = await context.new_page()
        page.on('pageerror', lambda e: report['errors'].append(str(e)))
        response = await page.goto(BASE + '/#testimonials', wait_until='networkidle')
        assert response.status == 200
        section = page.locator('#testimonials')
        await section.scroll_into_view_if_needed()
        carousel = page.get_by_role('region', name='Client testimonials')
        assert await section.locator('[data-testimonial-id]').count() == 7
        assert await section.get_by_role('button', name='Show testimonial from ', exact=False).count() == 7
        await page.wait_for_function('document.querySelectorAll("#testimonials [aria-roledescription=slide][aria-hidden=false]").length === 2')

        for index, item in enumerate(DATA):
            await select(page, item)
            article = page.locator('[data-testimonial-id="' + item['id'] + '"]')
            assert await article.locator('blockquote p').inner_text() == '“' + item['excerpt'] + '”'
            if item['hasFullLetter']:
                button = article.get_by_role('button', name='Read full testimonial from ' + item['author'], exact=True)
                await button.click()
                dialog = page.get_by_role('dialog')
                assert await dialog.is_visible()
                assert await dialog.get_by_role('heading').inner_text() == item['author']
                paragraphs = await dialog.locator('blockquote p').all_text_contents()
                assert paragraphs == item['paragraphs'], item['id']
                await page.keyboard.press('Escape')
                await dialog.wait_for(state='hidden')
                assert await button.evaluate('(el) => document.activeElement === el')
            report['testimonials'].append({'id': item['id'], 'excerptVerified': True, 'fullBodyVerified': item['hasFullLetter']})
            print('PASS testimonial:', item['author'], flush=True)

        await select(page, DATA[-1])
        await page.get_by_role('button', name='Next testimonial', exact=True).click()
        await page.wait_for_function('document.querySelector("#testimonials button[aria-current=true]").getAttribute("aria-label").includes("Scott")')
        await page.get_by_role('button', name='Previous testimonial', exact=True).click()
        await page.wait_for_function('document.querySelector("#testimonials button[aria-current=true]").getAttribute("aria-label").includes("Simmons")')
        await carousel.focus()
        await page.keyboard.press('ArrowRight')
        await page.wait_for_function('document.querySelector("#testimonials button[aria-current=true]").getAttribute("aria-label").includes("Scott")')
        report['arrowAndKeyboardLooping'] = True

        for width in [1440, 1280, 1024, 768, 375]:
            await page.set_viewport_size({'width': width, 'height': 1000})
            await page.goto(BASE + '/#testimonials', wait_until='networkidle')
            await select(page, DATA[2])
            await page.wait_for_function('(n) => document.querySelectorAll("#testimonials [aria-roledescription=slide][aria-hidden=false]").length === n', arg=2 if width >= 768 else 1)
            assert not await page.evaluate('document.documentElement.scrollWidth > innerWidth')
            for item in await section.locator('[aria-hidden=true] button').all():
                assert await item.get_attribute('tabindex') == '-1'
            await section.screenshot(path=str(REVIEW / f'testimonials-{width}.png'), style='header { visibility: hidden !important; }')
            report['responsive'].append({'width': width, 'visibleCards': 2 if width >= 768 else 1, 'overflow': False})
            print('PASS responsive:', width, flush=True)

        await select(page, DATA[2])
        await section.scroll_into_view_if_needed()
        viewport = section.locator('[data-slot=carousel-content]')
        box = await viewport.bounding_box()
        y = max(100, min(800, box['y'] + 100))
        client = await context.new_cdp_session(page)
        await client.send('Input.dispatchTouchEvent', {'type': 'touchStart', 'touchPoints': [{'x': 300, 'y': y}]})
        for x in [260, 220, 180, 140, 100, 60]:
            await client.send('Input.dispatchTouchEvent', {'type': 'touchMove', 'touchPoints': [{'x': x, 'y': y}]})
            await asyncio.sleep(0.025)
        await client.send('Input.dispatchTouchEvent', {'type': 'touchEnd', 'touchPoints': []})
        await page.wait_for_function('!document.querySelector("#testimonials button[aria-current=true]").getAttribute("aria-label").includes("Troy")')
        report['touchSwipe'] = True
        await select(page, DATA[-1])
        await page.get_by_role('button', name='Read full testimonial from ' + DATA[-1]['author']).click()
        dialog = page.get_by_role('dialog')
        assert await dialog.is_visible()
        assert not await page.evaluate('document.documentElement.scrollWidth > innerWidth')
        await dialog.screenshot(path=str(REVIEW / 'testimonial-dialog-mobile.png'))
        await page.keyboard.press('Escape')
        await dialog.wait_for(state='hidden')
        report['mobileFullTestimonial'] = True
        await context.close()

        normal = await browser.new_context(viewport={'width': 1440, 'height': 1000})
        page = await normal.new_page()
        await page.goto(BASE + '/#testimonials', wait_until='networkidle')
        before = await page.locator('#testimonials button[aria-current=true]').get_attribute('aria-label')
        await asyncio.sleep(2)
        assert await page.locator('#testimonials button[aria-current=true]').get_attribute('aria-label') == before
        await select(page, DATA[3])
        await page.wait_for_timeout(600)
        await page.locator('#testimonials').screenshot(path=str(REVIEW / 'testimonials-desktop.png'), style='header { visibility: hidden !important; }')
        report['noAutoplay'] = True
        await browser.close()
    assert not report['errors'], report['errors']
    (REVIEW / 'test-results.json').write_text(json.dumps(report, indent=2) + '\n')
    print('All testimonial tests passed; no form submissions were sent.', flush=True)

if __name__ == '__main__':
    asyncio.run(main())

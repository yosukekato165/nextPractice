import { test, expect} from "@playwright/test";

test('basic test', async ({ page }) => {
    await page.goto('http://localhost:3000/posts');
    const title = page.locator('h1');
    await expect(title).toHaveText('POST一覧');
});
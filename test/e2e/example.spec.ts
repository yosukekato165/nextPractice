import { test, expect} from "@playwright/test";
import mockWithMSW from '../mockWithMSW'

test('basic test', async ({ page }) => {
    await page.goto('http://localhost:3000/posts');
    const title = page.locator('h1');
    await expect(title).toHaveText('POST一覧');
});


mockWithMSW.only('book title', async ({ page, requestInterceptor, rest }) => {
    // mock the response of the server-side request
    requestInterceptor.use(
        rest.get(`https://jsonplaceholder.typicode.com/posts`, (req, res, ctx) =>
            res(
                ctx.json([{
                    userId: 10,
                    id: 100,
                    title: 'MSW Mock data',
                    body: 'cupiditate quo est a modi nesciunt soluta\n' +
                        'ipsa voluptas error itaque dicta in\n' +
                        'autem qui minus magnam et distinctio eum\n' +
                        'accusamus ratione error aut'
                }])
            )
        )
    )
    await page.goto(`http://localhost:3000/posts`)
    expect(await page.waitForSelector('text=MSW Mock data')).toBeTruthy()
})
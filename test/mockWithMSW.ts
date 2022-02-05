import { test as base } from '@playwright/test'
// @ts-ignore
import path from 'path'
import { rest } from 'msw'
import type { SetupServerApi } from 'msw/node'


// Extend base test with our fixtures.
const mockWithMSW = base.extend<{
    requestInterceptor: SetupServerApi
    rest: typeof rest
}>({
    requestInterceptor: [
        async ({}, use) => {
            // Import requestInterceptor from the built app so we
            // can attach attach our mocks to it from each test
            const { requestInterceptor } = require('../.next/server/pages/_app')
            await use(requestInterceptor)
        },
        {
            //@ts-ignore
            scope: 'worker',
        },
    ],
    rest,
})
// this "test" can be used in multiple test files,
// and each of them will get the fixtures.
export default mockWithMSW
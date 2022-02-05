import '../styles/globals.css'

// if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
//   require("../mock");
// }

export const requestInterceptor =
    process.env.NEXT_PUBLIC_API_MOCKING === "enabled"
        ? (() => {

          const { setupServer } = require('msw/node')
          const requestInterceptor = setupServer()

            // Load our build time request handlers to set up mocks for requests
            // from getStaticProps functions, but only while building.
            if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
                requestInterceptor.use(
                    ...require("../test/production-build-request-handlers")
                );
            }

          requestInterceptor.listen({
            // silence warnings when actual requests are made
            // https://github.com/mswjs/msw/issues/191#issuecomment-652292341
            onUnhandledRequest: 'bypass',
          })
            // require("../mock");
          return requestInterceptor
        })()
        : undefined

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

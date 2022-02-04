import '../styles/globals.css'

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../mock");
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

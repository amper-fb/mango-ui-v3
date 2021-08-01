import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'
import '../styles/index.css'
import useWallet from '../hooks/useWallet'
import useHydrateStore from '../hooks/useHydrateStore'
import useMangoStore from '../stores/useMangoStore'
import Notifications from '../components/Notification'

function App({ Component, pageProps }) {
  useHydrateStore()
  useWallet()
  const blurBackground = useMangoStore((s) => s.blurBackground)

  return (
    <>
      <Head>
        <title>Mango Markets</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Mango Markets, Serum, SRM, Serum DEX, DEFI, Decentralized Finance, Decentralised Finance, Crypto, ERC20, Ethereum, Decentralize, Solana, SOL, SPL, Cross-Chain, Trading, Fastest, Fast, SerumBTC, SerumUSD, SRM Tokens, SPL Tokens"
        />
        <meta
          name="description"
          content="Mango Markets - Decentralised, cross-margin trading up to 5x leverage with lightning speed and near-zero fees powered by Serum."
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mango Markets" />
        <meta
          name="twitter:description"
          content="Mango Markets - Decentralised, cross-margin trading up to 5x leverage with lightning speed and near-zero fees powered by Serum."
        />
        <meta name="twitter:image" content="/twitter-image.png" />

        <script src="/datafeeds/udf/dist/polyfills.js"></script>
        <script src="/datafeeds/udf/dist/bundle.js"></script>

        <link rel="manifest" href="/manifest.json"></link>
      </Head>
      <ThemeProvider defaultTheme="Mango">
        <div className="bg-th-bkg-1">
          <div
            className={`default-transition filter ${
              blurBackground ? 'blur-sm' : 'blur-none'
            }`}
          >
            <Component {...pageProps} />
          </div>
        </div>
        <Notifications />
      </ThemeProvider>
    </>
  )
}

export default App

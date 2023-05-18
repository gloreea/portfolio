import '@/styles/globals.css'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar />

    <Component {...pageProps} />
    <footer>
      © Gloree Aranda {new Date().getFullYear()} GPLv3
    </footer>
    </>
  )
}

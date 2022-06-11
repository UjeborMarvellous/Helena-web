import '../styles/globals.css'
import Head from 'next/head'
import Navbar from './component/Navbar'
import Whatsapp from './component/Whatsapp'
import { SnipcartProvider } from 'use-snipcart'


function MyApp({ Component, pageProps }) {
  return(
    <SnipcartProvider>
        <Head/>
        <Navbar />
        <Whatsapp/>
        <Component {...pageProps} />
    </SnipcartProvider>
  )
}

export default MyApp

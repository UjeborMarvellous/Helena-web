import '../styles/globals.css'
import Head from 'next/head'
import Navbar from './component/Navbar'
import Whatsapp from './component/Whatsapp'




function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head/>
      <Navbar/>
      <Whatsapp/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

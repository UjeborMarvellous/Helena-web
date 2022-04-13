import Head from 'next/head'
import Navbar from './component/Navbar'
import Header from './component/Header'
import Fotter from './component/Fotter'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Helena Furniture</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar />
        <Header />
        <Fotter />
    </div>
  )
}

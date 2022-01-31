import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const VERSION = 'v0.0.1 - pre-alpha';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>BridgeTogether - {VERSION}</title>
        <meta name="description" content="App written during Coinbase's SmartContract HackDays 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Let's Bridge, Together!
        </h1>

        <div className={styles.grid}>
          <a href="javascript:;" className={styles.card}>
            <h2>Connect Wallet &rarr;</h2>
            <p>Connect your crypto wallet to start bridging</p>
          </a>

          <a href="javascript:;" className={styles.card}>
            <h2>Real-Time Brigers &rarr;</h2>
            <p>Look at batches in real-time before jumping in</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright &copy; Coinbase Inc
        </a>
      </footer>
    </div>
  )
}

export default Home

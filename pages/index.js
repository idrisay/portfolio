import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button, Space, DatePicker, Card } from 'antd'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Idris Ay</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/dev.webp" />
      </Head>

      <main className={styles.main}>
        <div>
          Header
        </div>
      </main>
    </div>
  )
}

import Head from 'next/head'
import ConnectForm from '../components/connect'
import styles from '../styles/Home.module.css'
import 'rsuite/dist/rsuite.min.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chat</title>
        <meta name="description" content="Chat with gRPC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ConnectForm  />
      </main>

      
    </div>
  )
}

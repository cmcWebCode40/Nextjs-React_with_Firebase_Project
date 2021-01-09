import Head from 'next/head'
import CustomLoader from '../components/Loader/CustomLoader'
import styles from '../styles/Home.module.css'

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <CustomLoader visible={true} type="Oval" />
      </main>
    </div>
  )
}

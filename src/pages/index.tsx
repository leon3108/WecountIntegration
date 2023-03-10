import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Wecount Intégration</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main} style={roboto.style}>
        <div className={styles.card}>
          <div className={styles.theme}>
            <p>User Interface</p>
          </div>
          <h1 className={styles.title}> Service Page Website</h1>
          <div className={styles.description}>Make a page display about services for websites company with blue and red colors</div>
          <div className={styles.friends}>
            <div className={styles.participant}>
              <div className={styles.check}></div>
              <p>0/20</p>
            </div>
            <div className={styles.invitation}>
              <div className={styles.check} id={styles["check_1"]}></div>
              <div className={styles.check} id={styles["check_2"]}></div>
              <div className={styles.check} id={styles["check_3"]}></div>
              <button className={styles.button}>Invite</button>
            </div>
          </div>
          <div className={styles.sharing}>
            <div className={styles.group}>
              <div className={styles.check}></div>
              <p>4 attachement</p>
            </div>
            <p>|</p>
            <div className={styles.group}>
              <div className={styles.check}></div>
              <p>10 Comment</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

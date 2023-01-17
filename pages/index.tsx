import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.title}>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.title}>หนังสือ Made To Stick คนเขียนมีแนวทางให้เราลอง เป็นหลักการ 6 อย่าง เป็นคุณสมบัติของไอเดียที่จะทำให้มันปัง ได้แก่ Simple, Unexpected, Concrete, Credible, Emotional และ Stories ได้ตัวย่อเป็นความสำเร็จ เป็น SUCCES</p>
      <p className={styles.title}>หนังสือ Made To Stick คนเขียนมีแนวทางให้เราลอง เป็นหลักการ 6 อย่าง เป็นคุณสมบัติของไอเดียที่จะทำให้มันปัง ได้แก่ Simple, Unexpected, Concrete, Credible, Emotional และ Stories ได้ตัวย่อเป็นความสำเร็จ เป็น SUCCES</p>
      <a className={styles.btn}>
        <Link href="/ninjas">see ninjas listing</Link>
      </a>
    </div>   
  )
}

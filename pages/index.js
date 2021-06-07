import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas'></meta>
      </Head>
      <div>
        <h1 className='title'>HOMEPAGE</h1>
        <p className={styles.text}>
          Ullamco qui do nulla minim cupidatat Lorem velit. Velit enim quis qui duis in labore consectetur ut sunt magna. Nostrud sint ea ullamco nostrud dolore. Quis est cillum Lorem nisi in. Quis dolor laboris ad irure aliqua. Nostrud do pariatur fugiat non velit mollit ullamco Lorem et cillum mollit occaecat Lorem excepteur. Id irure est fugiat velit est tempor do nulla.Consequat esse id non laborum aute dolor minim. Lorem laboris reprehenderit et cupidatat fugiat adipisicing nulla culpa deserunt eiusmod labore laboris magna. Quis mollit proident qui aliqua qui. Sint ea do id ipsum consequat. Ad dolore cupidatat excepteur pariatur commodo excepteur culpa irure non exercitation velit nisi ipsum Lorem. Voluptate incididunt aliqua labore Lorem.
      </p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>

      </div>
    </>
  )
}

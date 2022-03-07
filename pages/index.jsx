/* 
 * @Author: Mr.B 
 * @Date: 2022-03-04 11:39:23 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2022-03-04 20:23:53
 */

import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'

import Test from '../components/Test'
import Layout from '../components/Layout'

import classNames from 'classnames/bind'
import styles from '../styles/index.module.scss'
let cx = classNames.bind(styles)

export default function Home({some_data}) {
    return (
        <Layout home>
            <div className={cx('container')}>
                <Head>
                    <title>Home</title>
                    <meta name="description" content="Home desc" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Test />

                <Link href="/china">
                    <a 
                        className={cx('link')} 
                        // target="_blank" 
                        >
                        China
                    </a>
                </Link>

                {/* <Image
                    src="/images/profile.jpg" // Route of the image file
                    height={144} // Desired size with correct aspect ratio
                    width={144} // Desired size with correct aspect ratio
                    alt="Your Name"
                /> */}
            </div>
        </Layout>
    )
}

export async function getStaticProps(context) {
    return {
        props: {
            some_data: []
        }, // will be passed to the page component as props
    }
}
/* 
 * @Author: Mr.B 
 * @Date: 2022-03-04 15:07:19 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2022-03-04 18:26:37
 */

import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/Layout'

const China = () => {
    return ( <Layout>
        <Head>
            <title>China section</title>
            <meta name="description" content="this page contain news about China" />
        </Head>
        <h2>
            <Link href="/">
                Back to home
            </Link>
        </h2>
    </Layout> );
}
 
export default China;
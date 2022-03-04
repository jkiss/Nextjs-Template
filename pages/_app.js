/* 
 * @Author: Mr.B 
 * @Date: 2022-03-04 11:39:36 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2022-03-04 18:17:20
 */

import Script from 'next/script'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
    return <>
        <Script
            src="//res.wx.qq.com/open/js/jweixin-1.4.0.js"
            strategy="lazyOnload"
            onLoad={() =>
                console.log(`script loaded correctly.`)
            }
        />

        <Component {...pageProps} />
    </>
}

export default MyApp

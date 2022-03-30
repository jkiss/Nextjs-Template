/* 
 * @Author: Mr.B 
 * @Date: 2022-03-04 20:32:10 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2022-03-30 19:24:42
 */

import { useRouter } from 'next/router'

import classNames from 'classnames/bind'
import styles from '../../styles/news/index.module.scss'
let cx = classNames.bind(styles)

const News = ({post_id}) => {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (<div>
        this is a news: {post_id}.
    </div>);
}

export default News;

export async function getStaticPaths() {
    // Return a list of possible value for id
    return { 
        paths: [], 
        fallback: 'blocking' 
    }
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    console.log('params', params)

    return {
        props: {
            post_id: params.param.join('---')
        }, // will be passed to the page component as props
    }
}
/* 
 * @Author: Mr.B 
 * @Date: 2022-03-04 20:32:10 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2022-03-04 20:38:32
 */

import { useRouter } from 'next/router'

const Post = ({post_id}) => {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (<div>
        this is a special page: {post_id}.
    </div>);
}

export default Post;

export async function getStaticPaths() {
    // Return a list of possible value for id
    return { 
        paths: [], 
        fallback: 'blocking' 
    }
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id


    return {
        props: {
            post_id: params.slug.join('___')
        }, // will be passed to the page component as props
    }
}
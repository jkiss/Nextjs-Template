/* 
 * @Author: Mr.B 
 * @Date: 2022-03-04 20:32:10 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2022-03-04 20:38:32
 */

const Post = ({post_id}) => {
    return (<div>
        this is a post: {post_id}.
    </div>);
}

export default Post;

export async function getStaticPaths() {
    // Return a list of possible value for id
    return { 
        paths: [{
            params: {
                id: 'post1'
            }
        }, {
            params: {
                id: 'post2'
            }
        }, {
            params: {
                id: 'post3'
            }
        }], 
        fallback: false 
    }
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    return {
        props: {
            post_id: params.id
        }, // will be passed to the page component as props
    }
}
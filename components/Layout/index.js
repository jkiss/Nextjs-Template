/* 
 * @Author: Mr.B 
 * @Date: 2022-03-04 18:23:18 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2022-03-04 18:49:28
 */

import styles from './css.module.scss'

const Layout = ({ children, home }) => {
    return (<>
        <header>
            {
                home ? <p>this is home page</p> : <p>NOT home page...</p>
            }
        </header>
        <main className={styles.container}>
            {children}
        </main>
    </>);
}
 
export default Layout;
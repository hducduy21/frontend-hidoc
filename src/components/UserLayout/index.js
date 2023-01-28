import styles from "./UserLayout.scss";
import classNames from 'classnames';
import Layout from "~/components/Layout";
const cx = classNames.bind(styles);
function UserLayout({children}) {
    return ( 
        <Layout>
            <div className={cx("UserLayoutWrapper")}>
                {
                    children
                }
            </div>
        </Layout>
     );
}

export default UserLayout;
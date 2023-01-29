import styles from "./UserLayout.scss";
import classNames from 'classnames';
import Layout from "~/components/Layout";
import Footer from "~/components/Footer";

const cx = classNames.bind(styles);
function UserLayout({children}) {
    return ( 
        <Layout flagFoot={false}>
            <div className={cx("UserLayoutWrapper")}>
                    {children}
            </div>
            <Footer/>
        </Layout>
     );
}

export default UserLayout;
import Slider from "~/components/Slider";
import styles from "./Content.scss"
import classNames from 'classnames';
const cx = classNames.bind(styles);

function Content() {
    return ( 
        <div className={cx('container')}>
            <Slider/>
        </div>
     );
}

export default Content;
import Images from "~/assets/Images";
import styles from './Doctor.scss';
import classNames from 'classnames/bind';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const cx = classNames.bind(styles);

function Doctor() {
    return ( <div className={cx("container",'doctorContainer')}>
        <Row>
            <Col className={cx("left")} sm={true}>
                {/* <img src={Images.bstest}/> */}
            </Col>
            <Col className={cx("left")} sm={true}>
            </Col>
        </Row>
    </div> );
}

export default Doctor;
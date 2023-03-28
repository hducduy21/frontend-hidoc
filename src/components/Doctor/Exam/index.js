import classNames from 'classnames';
import style from './Exam.scss';
import { Row, Col } from 'react-bootstrap';
const cx = classNames.bind(style);

function Exam() {
    return (
        <Row className={cx('Exam_Wrapper')}>
            <Col xl={4} className={cx('Exam_chooise')}>
                <select name="session" id="session">
                    <option value="none">Ca khám</option>
                    <option value="id">Thứ 2, 7:00 - 9:00</option>
                </select>
                <select name="user" id="user" disabled={true}>
                    <option value="id">Vui lòng chọn ca khám</option>
                </select>
            </Col>
            <Col xl={4}>
                <h3>Thông tin bệnh nhân</h3>
            </Col>
        </Row>
    );
}

export default Exam;

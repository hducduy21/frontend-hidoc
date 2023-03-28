import classNames from 'classnames';
import style from './Schedule.scss';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const cx = classNames.bind(style);

const data = {
    1: [
        {
            id: 1,
            time: '7:00-9:00',
            number: 20,
            registered: 8,
        },
        {
            id: 2,
            time: '9:30-11:00',
            number: 30,
            registered: 16,
        },
        {
            id: 3,
            time: '13:00-15:00',
            number: 20,
            registered: 19,
        },
        {
            id: 4,
            time: '15:30-17:00',
            number: 15,
            registered: 15,
        },
    ],
    2: [
        {
            id: 5,
            time: '7:00-9:00',
            number: 20,
            registered: 8,
        },
        {
            id: 6,
            time: '9:30-11:00',
            number: 30,
            registered: 16,
        },
        {
            id: 7,
            time: '13:00-15:00',
            number: 20,
            registered: 19,
        },
        {
            id: 8,
            time: '15:30-17:00',
            number: 15,
            registered: 15,
        },
    ],
    3: [],
    4: [],
    5: [],
    6: [],
    0: [],
};
let dayOfWeek = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
function Schedule() {
    let [k, setK] = useState(0);
    let day = [
        new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * (k + 1)),
        new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * (k + 2)),
        new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * (k + 3)),
        new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * (k + 4)),
        new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * (k + 5)),
        new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * (k + 6)),
        new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * (k + 7)),
    ];
    return (
        <Row className={cx('Schedule_wrapper')}>
            <Col className={cx('Schedule_day')}>
                <table striped bordered hover>
                    <tbody>
                        {day.map((e, ind) => {
                            let t;
                            if (data[e.getDay()]) {
                                data[e.getDay()].forEach((element) => {
                                    t += <td>{element.time}</td>;
                                });
                            }
                            return (
                                <tr key={ind}>
                                    <td>
                                        {dayOfWeek[e.getDay()] +
                                            ' (' +
                                            day[0].getDate() +
                                            '/' +
                                            (day[0].getMonth() + 1) +
                                            '/' +
                                            day[0].getFullYear() +
                                            ')'}
                                    </td>
                                    {t}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Col>
        </Row>
    );
}

export default Schedule;

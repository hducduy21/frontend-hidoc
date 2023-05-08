import classNames from 'classnames';
import style from './Schedule.scss';
import { Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Modal } from 'antd';

const cx = classNames.bind(style);

let dayOfWeek = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
function colorDensity(a, b) {
    if (a === b) return 'noDensity';
    if (a / b >= 0.8) return 'redDensity';
    if (a / b >= 0.5) return 'yellowDensity';
    if (a / b >= 0.3) return 'greenDensity';
    return 'whiteDensity';
}
function Schedule() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const data = {
        1: [
            {
                id: 1,
                time: '8:00-9:00',
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
        7: [],
    };
    let [k, setK] = useState(0);
    let day = [
        new Date(new Date().getTime() + 24 * 60 * 60),
        new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 1),
        new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 2),
        new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 3),
        new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 4),
        new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 5),
        new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 6),
    ];
    return (
        <div className={cx('Schedule_wrapper')}>
            <div className={cx('Schedule_day')}>
                <Table>
                    {day.map((e, ind) => {
                        let t;
                        if (data[e.getDay()]) {
                            t = data[e.getDay()].map((element) => (
                                <td key={element.time}>
                                    <span className={cx(colorDensity(element.registered, element.number))}>
                                        {element.time + ' ' + element.registered + '/' + element.number}
                                    </span>
                                </td>
                            ));
                        }
                        return (
                            <tr key={ind}>
                                <td className={cx('noneDestiny')}>
                                    {dayOfWeek[day[ind].getDay()] +
                                        ' (' +
                                        day[ind].getDate() +
                                        '/' +
                                        (day[ind].getMonth() + 1) +
                                        '/' +
                                        day[ind].getFullYear() +
                                        ')'}
                                </td>
                                {t}
                            </tr>
                        );
                    })}
                </Table>
            </div>
            <div className="Schedule_add" onClick={showModal}>
                <Button variant="success">Thêm lịch mới</Button>
            </div>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    );
}

export default Schedule;

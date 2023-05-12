import classNames from 'classnames';
import style from './Exam.scss';
import { Row, Col } from 'react-bootstrap';
import { Select, Space, Form, Input, Button } from 'antd';
import { Table } from 'react-bootstrap';
const { TextArea } = Input;
const cx = classNames.bind(style);
const handleChange = (value) => {
    console.log(`selected ${value}`);
};
function Exam() {
    return (
        <Row className={cx('Exam_Wrapper')}>
            <Col xl={3} className={cx('Exam_chooise')}>
                <Form className="Exam_chooise_form">
                    <Space wrap>
                        <Form.Item label="Chọn ca khám">
                            <Select
                                defaultValue="lucy"
                                style={{
                                    width: 120,
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'jack',
                                        label: 'Jack',
                                    },
                                    {
                                        value: 'lucy',
                                        label: 'Lucy',
                                    },
                                    {
                                        value: 'Yiminghe',
                                        label: 'yiminghe',
                                    },
                                    {
                                        value: 'disabled',
                                        label: 'Disabled',
                                        disabled: true,
                                    },
                                ]}
                            />
                        </Form.Item>
                    </Space>
                    <Space wrap>
                        <Form.Item label="Chọn bệnh nhân">
                            <Select
                                defaultValue="lucy"
                                style={{
                                    width: 120,
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'jack',
                                        label: 'Jack',
                                    },
                                    {
                                        value: 'lucy',
                                        label: 'Lucy',
                                    },
                                    {
                                        value: 'Yiminghe',
                                        label: 'yiminghe',
                                    },
                                    {
                                        value: 'disabled',
                                        label: 'Disabled',
                                        disabled: true,
                                    },
                                ]}
                            />
                        </Form.Item>
                    </Space>
                </Form>
            </Col>
            <Col xl={4} className="Exam_info">
                <h5>Thông tin bệnh nhân</h5>
                <Table className="table_user_info">
                    <tr>
                        <td style={{ width: 110 }}>Tên:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Giới tính:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Ngày sinh:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Số điện thoại:</td>
                        <td>08167382363</td>
                    </tr>
                    <tr>
                        <td>Địa chỉ:</td>
                        <td>ahfoehjajdkfhjejh ahifhjiajhkeehjkh akfhjaiheuijenfk</td>
                    </tr>
                </Table>
            </Col>
            <Col xl={5}>
                <h5>Kết quả</h5>
                <Form>
                    <Form.Item label="Đơn thuốc" labelCol={{ span: 4 }}>
                        <TextArea rows={4} />
                    </Form.Item>
                </Form>
                <Form>
                    <Form.Item label="Kết quả" labelCol={{ span: 4 }}>
                        <TextArea rows={5} />
                    </Form.Item>
                </Form>
                <Form>
                    <Form.Item label="Lời nhắc" labelCol={{ span: 4 }}>
                        <TextArea rows={2} />
                    </Form.Item>
                </Form>
                <Button type="primary" style={{ float: 'right' }}>
                    Kết thúc
                </Button>
            </Col>
        </Row>
    );
}

export default Exam;

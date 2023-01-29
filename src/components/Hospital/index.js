import styles from './Hospital.scss';
import classNames from 'classnames/bind';
import { Button } from 'react-bootstrap';
import Images from "~/assets/Images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faHospital } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);
let imgQT = Images.quytrinh;
let inf = "Bệnh viện Chợ Rẫy với lịch sử thành lập trên 100 năm, là bệnh viện hạng đặc biệt tuyến Trung ương lớn nhất cả nước với trên 1.800 giường và trên 3.000 kỹ thuật y tế được thực hiện. Hàng ngày Bệnh viện Chợ Rẫy tiếp nhận trung bình 6,000 -  8,000 bệnh nhân đến khám. Bệnh viện Chợ Rẫy là bệnh viện đa khoa hoàn chỉnh, xếp hạng đặc biệt, tuyến kỹ thuật sau cùng các tỉnh thành phía Nam, trực thuộc Bộ Y tế. Thế mạnh nổi bật tại Bệnh viện Chợ Rẫy là sự kết hợp giữa các chuyên khoa mang lại hiệu quả tốt nhất trong việc chẩn đoán và điều trị cho người bệnh."
let type = 1
function Hospital() {
    const [check,setCheck] = useState(['checked', 'unchecked','unchecked'])
    return ( 
        <div className={cx("container","HospitalContainer")}>
            <img src={Images.bvtest}></img>
            <div className={cx("title")}>
                <table>
                    <tr>
                        <td rowSpan={2} style={{width:"120px"}}><FontAwesomeIcon icon={faHospital} className={cx("icon")}/></td>
                        <td><span className={cx("name")} >Bệnh viện chợ rẫy</span></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><span className={cx("address")}><FontAwesomeIcon icon={faLocationDot} className={cx("addressIcon")}/>19 Nguyễn Hữu Thọ, Phường Tân Phong, Quận 7, TP HCM</span></td>
                        <td style={{width:"200px"}}><Button style={{width:"100%"}} variant="success">Đặt số khám</Button></td>
                    </tr>
                </table>
            </div>
            <div className={cx("content")}>
                <table>
                    <tr>
                        <td  style={{width: "200px"}}><span className={cx(check[0])} style={{width: "100%"}} onClick={()=>{setCheck(['checked', 'unchecked','unchecked']); type=1}}>Giới thiệu >></span></td>
                        <td rowSpan={10} style={{verticalAlign: "top"}}>{type==1?<span className='inf'>{inf}</span>:<img src={imgQT}/>}</td>
                    </tr>
                    <tr><td><span className={cx(check[1])} onClick={()=>{setCheck(['unchecked', 'checked','unchecked']); type=2}}>Quy trình khám >></span></td></tr>
                    <tr><td><span className={cx(check[2])} onClick={()=>{setCheck(['unchecked', 'unchecked','checked'])}}>Sơ đồ >></span></td></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                </table>

            </div>
        </div>
     );
}

export default Hospital;
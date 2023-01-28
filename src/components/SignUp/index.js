import styles from "./SignUp.scss";
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faKey, faCakeCandles, faVenusMars, faLocationDot, faPhone,faBook } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function SignUp() {
    return ( 
        <div className={cx("login_wrapper")}>
            
            <form>  
                <h3  style={{marginBottom: "25px"}}>Đăng ký</h3>
                <table>
                    <tr>
                        <td><FontAwesomeIcon icon={faUser}/></td>
                        <td className="widthInput"><input type="text" placeholder="Họ tên" style={{width: "100%"}}/></td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faEnvelope}/></td>
                        <td><input type="text" placeholder="Email" style={{width: "100%"}}/></td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faLock}/></td>
                        <td><input type="text" placeholder="Mật khẩu" style={{width: "100%"}}/></td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faKey}/></td>
                        <td><input type="text" placeholder="Nhập lại mật khẩu"  style={{width: "100%"}}/></td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faCakeCandles}/></td>
                        <td><input type="text" placeholder="Ngày sinh"  style={{width: "100%"}}/></td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faVenusMars}/></td>
                        <td>
                            <span><label for="male">Nam</label><input type="radio" id="male" name="gender" value="male" checked/></span>
                            <span className="pd"><label for="female">Nữ</label><input type="radio" id="female" name="gender" value="female"/></span>
                        </td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faPhone}/></td>
                        <td><input type="text" placeholder="Số điện thoại"   style={{width: "100%"}}/></td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faLocationDot}/></td>
                        <td><input type="text" placeholder="Địa chỉ"  style={{width: "100%"}}/></td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faBook}/></td>
                        <td><textarea value="Nhập lịch sử bệnh lý"  style={{width: "100%"}}></textarea></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><button type="button">Đăng ký</button><button type="button" onClick={()=>{window.location.href="/login"}}>Đăng nhập</button></td>
                        
                    </tr>
                </table>
            </form>
        </div>
     );
}

export default SignUp;
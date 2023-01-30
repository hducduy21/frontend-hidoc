import styles from "./Login.scss";
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const cx = classNames.bind(styles);

function loginFun(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");
    if(email.value.length===0){
        toast.error("Vui lòng nhập email!")
    }
    else if(pass.value.length===0){
        toast.error("Vui lòng nhập mật khẩu!")
    }
    else if(pass.value.length<6){
        toast.error("Mật khẩu phải dài hơn hoặc bằng 6 ký tự!")
    }
    
}

function Login() {
    return ( 
        <div className={cx("login_wrapper")}>
            
            <form>  
                <h3  style={{marginBottom: "25px"}}>Đăng nhập</h3>
                <table>
                    <tr>
                        <td><FontAwesomeIcon icon={faEnvelope}/></td>
                        <td className="widthInput"><input type="text" placeholder="Email" style={{width: "100%"}} id="email"/></td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faLock}/></td>
                        <td><input type="password" placeholder="Mật khẩu" style={{width: "100%"}}  id="pass"/></td>
                    </tr>
                    
                    <tr>
                        <td colSpan={2}><button type="button" onClick={()=>{window.location.href="/signup"}}>Đăng ký</button>
                        <button type="button" onClick={()=>{loginFun()}} >Đăng nhập</button></td>
                        
                    </tr>
                </table>
            </form>
            <ToastContainer />
        </div>
     );
}

export default Login;
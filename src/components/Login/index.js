import styles from "./Login.scss";
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios";
const cx = classNames.bind(styles);

function validateLogin(email,pass){
    if(email.value.length===0){
        toast.error("Vui lòng nhập email!")
        return false;
    }
    else if(pass.value.length===0){
        toast.error("Vui lòng nhập mật khẩu!")
        return false;
    }
    else if(pass.value.length<5){
        toast.error("Mật khẩu phải dài hơn hoặc bằng 5 ký tự!")
        return false;
    }
    else{
        return true;
    }
    
}


function Login() {
    const dispatch = useDispatch();
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
                        <button type="button" onClick={()=>{
                            let email = document.getElementById("email");
                            let pass = document.getElementById("pass");
                            if(validateLogin(email,pass)){
                                let request = {email:email.value,password:pass.value}
                                axios.post('https://localhost:7056/api/User',request).then((data)=>{
                                    if(data.status===200){
                                        // document.cookie = "hidocAccount = " + JSON.stringify(data.data.data)
                                        dispatch({type: 'SET_USER', payload: data.data.data})
                                    }
                                }).catch((e)=>{console.log(e)})
                            }
                        }} >Đăng nhập</button></td>
                        
                    </tr>
                </table>
            </form>
            <ToastContainer />
        </div>
     );
}

export default Login;
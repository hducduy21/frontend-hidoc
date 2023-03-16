import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Images from '~/assets/Images';
import Search from '~/components/Search';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Header() {

  const user = useSelector((state) => state.User);
  
  
  return (
    
    <Navbar expand="lg" className={cx('wrapper_header')} fixed="top">
      <Container className={cx('container')}>
        <Navbar.Brand href="/home" className={cx('brand')}><img src={Images.logo} alt="img" className={cx('logo')}></img></Navbar.Brand>
        <span>Hi Doctor!</span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="/login" className={cx("login")}>
            <span>{(user.name === "" )?"Đăng nhập":user.name.split(" ")[(user.name.split(" ").length)-1]}</span>
            {(user.name === "" )?"":<FontAwesomeIcon icon={faUser} style={{marginLeft: "8px"}}/>}
          </Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
}

export default Header;
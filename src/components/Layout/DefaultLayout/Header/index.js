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
  const department = useSelector((state) => state.Department);
  const list = department.map((e,id)=><NavDropdown.Item href="#action/3.1" key={id}>{e.name}</NavDropdown.Item>)
  
  return (
    
    <Navbar expand="lg" className={cx('wrapper_header')} fixed="top">
      <Container className={cx('container')}>
        <Navbar.Brand href="/home" className={cx('brand')}><img src={Images.logo} alt="img" className={cx('logo')}></img></Navbar.Brand>
        <span>Hi Doctor!</span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Search/>
          </Nav>
          <Nav >
            <Nav.Link href="#home">Bác sỹ</Nav.Link>
            <Nav.Link href="#home">Bệnh viện/phòng khám</Nav.Link>

            <NavDropdown title="Chuyên khoa" id="dropdown-menu-align-end">
              {list}
            </NavDropdown>
            <NavDropdown title="Khác" id="dropdown-menu-align-end">
              <NavDropdown.Item href="#action/3.1">Đăng ký đối tác</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Cho tổ chức</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Hỗ trợ</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>

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
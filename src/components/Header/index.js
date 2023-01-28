import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Images from '~/assets/Images';
import Search from '~/components/Search';


import styles from './Header.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Header() {
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
              <NavDropdown.Item href="#action/3.1">Nội</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Ngoại</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sản</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Nhi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tâm lý</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Ung bướu</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Khác" id="dropdown-menu-align-end">
              <NavDropdown.Item href="#action/3.1">Đăng ký đối tác</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Cho tổ chức</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Hỗ trợ</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>

          <Nav>
          <Nav.Link href="/login"><span>Đăng nhập</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
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
    <Navbar expand="lg" className={cx('wrapper')}>
      <Container className={cx('container')}>
        <Navbar.Brand href="#home" className={cx('brand')}><img src={Images.logo} alt="img" className={cx('logo')}></img></Navbar.Brand>
        <span>Hi Doctor!</span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Search/>
          </Nav>
          <Nav >
            <Nav.Link href="#home">Bác sỹ</Nav.Link>

            <NavDropdown title="Chuyên khoa" id="dropdown-menu-align-end">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action/3.4" >
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Bệnh viện/phòng khám" id="dropdown-menu-align-end">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action/3.4" >
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Khác" id="dropdown-menu-align-end">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action/3.4" >
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav>
            <NavDropdown title="Đăng nhập" id="dropdown-menu-align-end">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action/3.4" >
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
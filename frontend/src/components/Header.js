import React from 'react'
import { Navbar,Container,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ChatIcon from '@material-ui/icons/Chat';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useSelector } from "react-redux";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" fixed="top" bg="dark" variant="dark" >
        <Container fluid>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link href="/search"><SearchIcon/><span className="m-1">検索</span></Nav.Link>
              <Nav.Link href="/chat"><ChatIcon/><span className="m-1">チャット</span></Nav.Link>
              <Nav.Link href="/profile"><PersonOutlineIcon/><span className="m-1">プロフィール</span></Nav.Link>
              <Nav.Link href="/friends"><PersonOutlineIcon/><span className="m-1">友達</span></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/logout"><ExitToAppIcon/><span className="m-1">ログアウト</span></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import title from '../img/title.jpg';

const Header = () => {
  return ( 
    <>
      <Navbar >
        <LinkContainer to="/">
           <Navbar.Brand> <img style={{width: '100%'}} src={title} alt="The daily news" /></Navbar.Brand>
        </LinkContainer>
      </Navbar >
      <Nav>
        <Nav.Item>
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
    </>
  );
}
 
export default Header;
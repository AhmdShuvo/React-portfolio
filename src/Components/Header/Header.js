import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{position:"sticky",  width: "100%"}} >
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  >
  <Container>
  <Navbar.Brand href="/">Developer portfolio</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavLink className="navbar-brand text-light" to="/myprojects">My projects</NavLink>
      <Nav.Link href="#contact">contact me </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;
import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faShoppingCart,faUser } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
     <Container>   <Navbar.Brand href="/">Apani Dukaan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/cart">Cart<FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
            
            <Nav.Link href="/login">Sign In<FontAwesomeIcon icon={faUser} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faShoppingCart,faUser } from '@fortawesome/free-solid-svg-icons'
import {LinkContainer} from 'react-router-bootstrap'
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
     <Container>  
        <LinkContainer to="/">
        <Navbar.Brand  >
          Apani Dukaan
        </Navbar.Brand>
        </LinkContainer>
      
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/cart">
            <Nav.Link >
              Cart<FontAwesomeIcon icon={faShoppingCart} />
              </Nav.Link>

            </LinkContainer>
            <LinkContainer to="/login">
            <Nav.Link >
              Sign In<FontAwesomeIcon icon={faUser} />
              </Nav.Link>
              </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

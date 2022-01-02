import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import "./Header.css";

const Header = () => {

  const { handaleGoogleSign, error, user } = useFirebase();

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" className=".container">
        <Container>
          <h4 className="nav-header">Bangal Tourism</h4>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Navbar.Brand>
                <NavLink to="/Home" className="header-link">Home</NavLink>
              </Navbar.Brand>
              <Navbar.Brand><NavLink to="/About" className="header-link">AboutUs</NavLink></Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {error}
      {user.displayName}
      <button onClick={handaleGoogleSign}>Google sign</button>
    </div>
  );
};

export default Header;

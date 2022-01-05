import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useFirebase from "../../Hooks/useFirebase";
import "./Header.css";

const Header = () => {
  // const { handaleGoogleSign, error, user,handaleLogOut } = useFirebase();
  const { handaleGoogleSign, error, user, handaleLogOut, admin } = useAuth();
  console.log(admin);
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <h4 className="nav-header">Bangal Tourism</h4>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Navbar.Brand>
                <NavLink
                  to="/Home"
                  className="header-link"
                  style={({ isActive }) => ({
                    color: isActive ? "Crimson" : "white",
                  })}
                >
                  <b> Home</b>
                </NavLink>
              </Navbar.Brand>
              <Navbar.Brand>
                <NavLink
                  to="/TourPlans"
                  className="header-link"
                  style={({ isActive }) => ({
                    color: isActive ? "Crimson" : "white",
                  })}
                >
                  <b>TourPlans</b>
                </NavLink>
              </Navbar.Brand>
              {user.uid && (
                <Navbar.Brand>
                  <NavLink
                    to="/Dashboard"
                    className="header-link"
                    style={({ isActive }) => ({
                      color: isActive ? "Crimson" : "white",
                    })}
                  >
                    <b>Dashboard</b>
                  </NavLink>
                </Navbar.Brand>
              )}

              <Navbar.Brand>
                <NavLink
                  to="/About"
                  className="header-link"
                  style={({ isActive }) => ({
                    color: isActive ? "Crimson" : "white",
                  })}
                >
                  <b> AboutUs</b>
                </NavLink>
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
          {user.email && (
            <img className="header-img" src={user.photoURL} alt="" />
          )}
          {user.email && (
            <span className="text-light mx-1">{user?.displayName}</span>
          )}
          {user.email ? (
            <button onClick={handaleLogOut} className="logOutHdr">
              <b> Logout</b>
            </button>
          ) : (
            <Link to="/login">
              <button className="loginButtonHdr">
                <b>Login</b>
              </button>
            </Link>
          )}
        </Container>
        {/* <div className="userInfo"> */}

        {/* </div> */}
      </Navbar>
    </div>
  );
};

export default Header;

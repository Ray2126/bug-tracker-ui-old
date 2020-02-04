import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

import fakeProjectsServer from "../resources/fakeProjectsServer.json";
import { useAuth0 } from "../react-auth0-spa";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">Bug Tracker</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Projects" id="basic-nav-dropdown">
            {fakeProjectsServer.map(project => (
              <NavDropdown.Item>{project.title}</NavDropdown.Item>
            ))}
          </NavDropdown>
          <Button variant="success" href="#">
            New Project
          </Button>

          {isAuthenticated && (
            <span>
              <Link to="/">Home</Link>&nbsp;
              <Link to="/profile">Profile</Link>
            </span>
          )}
          {isAuthenticated && <Button onClick={() => logout()}>Log out</Button>}

          {!isAuthenticated && (
            <Button onClick={() => loginWithRedirect({})}>Log in</Button>
          )}
        </Nav>

        <NavDropdown
          title={<i className="fas fa-portrait fa-3x" />}
          id="nav-dropdown"
          alignRight
        >
          <NavDropdown.Item>{<h4>Username</h4>}</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Profile</NavDropdown.Item>
          <NavDropdown.Item>Settings</NavDropdown.Item>
          <NavDropdown.Item>Sign Out</NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

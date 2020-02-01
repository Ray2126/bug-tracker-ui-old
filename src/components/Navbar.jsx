import React from "react";
import fakeProjectsServer from "../resources/fakeProjectsServer.json";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Bug Tracker
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Projects
              </a>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {fakeProjectsServer.map(project => (
                  <li>
                    <a className="dropdown-item" href="#">
                      {project.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <button className="btn btn-success">New Project</button>
            {isAuthenticated && (
              <span>
                <Link to="/">Home</Link>&nbsp;
                <Link to="/profile">Profile</Link>
              </span>
            )}
            {isAuthenticated && (
              <button onClick={() => logout()}>Log out</button>
            )}

            {!isAuthenticated && (
              <button onClick={() => loginWithRedirect({})}>Log in</button>
            )}
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-portrait fa-3x"></i>
              </a>

              <ul
                className="dropdown-menu dropdown-menu-right text-center"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <h4>Username</h4>
                </li>
                <hr></hr>
                <li className="my-1">
                  <a href="#" className="text-dark">
                    Profile
                  </a>
                </li>
                <li className="my-1">
                  <a href="#" className="text-dark">
                    Settings
                  </a>
                </li>
                <li className="my-1">
                  <a href="#" className="text-danger">
                    <span className="font-weight-bold">Sign out</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

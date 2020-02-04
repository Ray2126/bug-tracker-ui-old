import React from "react";
import StartPage from "./StartPage";
import NavBar from "./NavBar";
import Issues from "./Issues/Issues";
import SecondNav from "./SecondNav/SecondNav";
import { useAuth0 } from "../react-auth0-spa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./Profile";
import history from "../utils/history";
import { Nav } from "react-bootstrap";
import PrivateRoute from "./PrivateRoute";

import IssuesPage from "./IssuesPage";

const NavWrapped = () => (
  <React.Fragment>
    <NavBar />
    <Route path="/main" exact component={IssuesPage} />
    <PrivateRoute path="/profile" component={Profile} />
  </React.Fragment>
);

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={StartPage} />
          <Route component={NavWrapped} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;

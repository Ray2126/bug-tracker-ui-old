import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useAuth0 } from "../react-auth0-spa";
import history from "../utils/history";

const StartPage = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <Button onClick={() => loginWithRedirect({})}>Log in</Button>
      )}
    </div>
  );
};
export default StartPage;

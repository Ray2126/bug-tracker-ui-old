import React from "react";
import StartPage from "./StartPage";
import NavBar from "./Navbar";
import Issues from "./Issues/Issues";
import SecondNav from "./SecondNav/SecondNav";
import { useAuth0 } from "../react-auth0-spa";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {/* <StartPage /> */}
      <NavBar />
      <SecondNav />
      <Issues />
    </div>
  );
};
export default App;

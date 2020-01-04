import React from "react";
import StartPage from "./StartPage";
import NavBar from "./Navbar";
import Issues from "./Issues/Issues";
import SecondNav from "./SecondNav/SecondNav";
import TestNav from "./test2ndNav";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
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

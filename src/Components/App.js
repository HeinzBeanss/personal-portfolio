import React from "react";

import "../CSS/App.css";
import Nav from "../Components/Nav";
import Introduction from "../Components/Introduction";
import Skillset from "../Components/Skillset";
import PersonalProjects from "../Components/PersonalProjects";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Introduction />
      <Skillset />
      <PersonalProjects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

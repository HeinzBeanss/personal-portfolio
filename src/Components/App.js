import React from "react";
import '../CSS/App.css';
import Theme from "../Components/Theme";
import Introduction from "../Components/Introduction";
import Skillset from "../Components/Skillset";
import PersonalProjects from "../Components/PersonalProjects";
import Contact from "../Components/Contact";

const App = () => {




  return (
    <div className="App">

      <Theme />
      <Introduction />
      <Skillset />
      <PersonalProjects />
      <Contact />
    
    </div>
  );
}

export default App;

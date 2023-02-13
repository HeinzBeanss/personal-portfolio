import React, {useEffect } from "react";
import { Route, Routes, useLocation } from 'react-router-dom'

import '../CSS/App.css';
import Nav from "../Components/Nav"
import Introduction from "../Components/Introduction";
import Skillset from "../Components/Skillset";
import PersonalProjects from "../Components/PersonalProjects";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer"

const App = () => {
  // const { pathname, hash, key } = useLocation();

  // useEffect(() => {
  //   // if not a hash link, scroll to top
  //   if (hash === '') {
  //     window.scrollTo(0, 0);
  //   }
  //   // else scroll to id
  //   else {
  //     setTimeout(() => {
  //       const id = hash.replace('#', '');
  //       const element = document.getElementById(id);
  //       if (element) {
  //         element.scrollIntoView();
  //       }
  //     }, 0);
  //   }
  // }, [pathname, hash, key]);

  return (

      // <Routes>
      //   <Route path="/" component={Nav} />
      //   <Route path="/" component={Introduction} />
      //   <Route path="/" component={Skillset} />
      //   <Route path="/" component={PersonalProjects} />
      //   <Route path="/" component={Contact} />
      // </Routes>

      <div className="App">
        <Nav />
        <Introduction />
        <Skillset />
        <PersonalProjects />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;

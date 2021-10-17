import React from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import ContactMe from "./components/ContactMe";
import Resume from "./components/Resume"

function App() {
    return (
      <div>
        <Navbar />
        <AboutMe />
        <MyWork />
        <ContactMe />
        <Resume />
      </div>
    );
  }

export default App;

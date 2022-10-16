import React, { useState, useEffect } from "react";

import Home from "./components/Home";
import Project from "./components/Project";
import Navbar from "./components/Navbar";

import ScrollToTop from "./components/ScrollToTop";

import scrollreveal from "scrollreveal";
import "./sass/index.scss";

function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .free,
        
       
        .project,
        .signup,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  }, 1500);
  return (
    <div data-theme={theme} className="app-container">
      <ScrollToTop />
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <Home />

      <Project />
      {/*  
      
      <Free />
       <Release />
       <Clients />
     <SuperRare />
      
     
      <Signup />
      <Footer /> */}
    </div>
  );
}

export default App;

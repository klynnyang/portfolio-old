import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { scroller } from "react-scroll";

export default function NavBar(props) {
  const [menuActive, setMenuActive] = useState(false);

  const [showMenuLinks, setShowMenuLinks] = useState(false);

  const toggleClass = () => {
    setMenuActive(!menuActive);
    setShowMenuLinks(!showMenuLinks);
  };

  function goHome() {
    scroller.scrollTo("home");
  }

  function goProjects() {
    scroller.scrollTo("projects");
  }

  function goContact() {
    scroller.scrollTo("contact");
  }

  function goSkills() {
    scroller.scrollTo("skills");
  }

  return (
    <div className={props.showNavBar? "nav-container scrolled":"nav-container" }>
    <nav className="navbar">
      <h1 id="navbar-logo" onClick={goHome}>Lynn's Portfolio</h1>
      <div className="menu-toggle" id={menuActive? 'mobile-menu-active':'mobile-menu'} onClick={toggleClass}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={showMenuLinks && props.showNavBar? 'nav-menu active scrolled' : showMenuLinks && ! props.showNavBar? 'nav-menu active':  'nav-menu' }>
        <li>
          <a onClick={goSkills} className="nav-links">
            SKILLS
          </a>
        </li>
        <li>
          <a onClick={goProjects} className="nav-links">
            PROJECTS
          </a>
        </li>
        <li>
          <a onClick={goContact} className="nav-links">
            CONTACT ME
          </a>
        </li>
      </ul>
    </nav>
  </div>
  );
}

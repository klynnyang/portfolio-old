import NavBar from "../../components/Navbar/NavBar";
import Home from "../../components/Home/Home";
import "./App.css";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Skills from "../../components/Skills/Skills";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import LynnResume from "../../assets/LynnResume.pdf";

export default function App() {

  const [showNavBar, setShowNavBar] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 30) {
        setShowNavBar(true);
      } else {
        setShowNavBar(false);
      }
    });
  }, []);

  return (
    <>
      <NavBar showNavBar={showNavBar} setShowNavBar={setShowNavBar} />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <div class="menu">
        <input
          type="checkbox"
          href="#"
          class="menu-open"
          name="menu-open"
          id="menu-open"
        />
        <label class="menu-open-button" for="menu-open">
          <span class="lines line-1"></span>
          <span class="lines line-2"></span>
          <span class="lines line-3"></span>
        </label>

        <a href="https://www.linkedin.com/in/kunlin-yang-b1b5171b1/" class="menu-item one">
          {" "}
          <FontAwesomeIcon icon={faLinkedin} />{" "}
        </a>
        <a href="https://github.com/klynnyang" class="menu-item two">
          {" "}
          <FontAwesomeIcon icon={faGithub} />{" "}
        </a>
        <a href={LynnResume} class="menu-item three">
          {" "}
          <FontAwesomeIcon icon={faFile} />{" "}
        </a>
      </div>
    </>
  );
}

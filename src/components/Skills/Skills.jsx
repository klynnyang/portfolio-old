import React, {useEffect, useState, useRef} from "react";
import Stars from "../Star/Stars";
import "./Skills.css";

export default function Skills() {

  const [animateSkill, setAnimateSkill] = useState(false);

  useEffect(()=>{
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200){
        setAnimateSkill(true);
      } else {
        setAnimateSkill(false);
      }
    })
  }, [])

  return (
    <div className="skills" id="skills" style={{ minHeight: "100vh" }}>
      <Stars />
      <div className="skills-container">
        <span className={animateSkill? "active mt-4": "mt-4"}>
          LIST OF SKILLS
        </span>
        <hr />

        <div className={animateSkill? "skills-c active mt-3": "skills-c mt-3"}>
          <div className="each-skill">
            <i class="devicon-mongodb-plain" style={{ fontSize: "2.5rem" }}></i>
            MongoDB
          </div>
          <div className="each-skill">
            <i
              class="devicon-postgresql-plain"
              style={{ fontSize: "2.5rem" }}
            ></i>
            PostgreSQL
          </div>
          <div className="each-skill">
            <i class="devicon-nodejs-plain" style={{ fontSize: "2.5rem" }}></i>
            NodeJS
          </div>
          <div className="each-skill">
            <i
              class="devicon-react-original"
              style={{ fontSize: "2.5rem" }}
            ></i>
            React
          </div>
          <div className="each-skill">
            <i class="devicon-django-plain" style={{ fontSize: "2.5rem" }}></i>
            Django
          </div>
        </div>

        <div className={animateSkill? "skills-c active pt-5": "skills-c pt-5"}>
          <div className="each-skill">
            <i class="devicon-html5-plain" style={{ fontSize: "2.5rem" }}></i>
            HTML5
          </div>
          <div className="each-skill">
            <i class="devicon-css3-plain" style={{ fontSize: "2.5rem" }}></i>
            CSS3
          </div>
          <div className="each-skill">
            <i class="devicon-python-plain" style={{ fontSize: "2.5rem" }}></i>
            Python
          </div>
          <div className="each-skill">
            <i
              class="devicon-javascript-plain"
              style={{ fontSize: "2.5rem" }}
            ></i>
            Javascript
          </div>
          <div className="each-skill">
            <i class="devicon-redux-original" style={{ fontSize: "2.5rem" }}></i>
            Redux
          </div>
          <div className="each-skill">
            <i
              class="devicon-github-original"
              style={{ fontSize: "2.5rem" }}
            ></i>
            GitHub
          </div>
        </div>
      </div>
    </div>
  );
}

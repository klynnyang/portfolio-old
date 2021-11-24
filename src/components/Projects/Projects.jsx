import React, { useEffect, useState } from "react";
import "./Projects.css";
import battleship from "../../assets/battleship.jpg";
import finance from "../../assets/finance.jpg";
import game from "../../assets/game.jpg";
import pets from "../../assets/pets.jpg";
import { Carousel } from "react-bootstrap";
import Stars from "../Star/Stars";

export default function Projects() {
  const [animateProjects, setAnimateProjects] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 1200) {
        setAnimateProjects(true);
      } else {
        setAnimateProjects(false);
      }
    });
  }, []);

  return (
    <div className="projects" id="projects" style={{ minHeight: "100vh" }}>
      <Stars />
      <div className="project-sections">
        <span className={animateProjects ? "active m-4" : "transparent mb-4"}>
          MY LATEST PROJECTS
        </span>
        <div className="slide-container">
          <Carousel variant="dark" interval={null}>
            <Carousel.Item>
              <img className="project" img src={pets} alt="Fourth slide" />
              <Carousel.Caption>
                <h5>Paway</h5>
                <p>MERN stack web application for lost/found pets.</p>
                <div className="links">
                  <a href="https://github.com/klynnyang/pet-tracker">
                    <button class="btn draw-border">
                      <i
                        class="fab fa-github"
                        style={{ fontSize: "1.2rem" }}
                      ></i>
                      {"  "}GitHub
                    </button>
                  </a>
                  <a href="https://paway.herokuapp.com/">
                    <button className="btn draw-border">
                      <i class="fas fa-link" style={{ fontSize: "1.2rem" }}></i>
                      {"  "}App
                    </button>
                  </a>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="project" src={finance} alt="Third slide" />
              <Carousel.Caption>
                <h5>Expense-O-Track</h5>
                <p>
                  Personal finance app for tracking monthly expenses -
                  individual & family, developed with Django & Postgresql.
                </p>
                <div className="links">
                  <a href="https://github.com/klynnyang/ExpenseTracker">
                    <button class="btn draw-border">
                      <i
                        class="fab fa-github"
                        style={{ fontSize: "1.2rem" }}
                      ></i>
                      {"  "}GitHub
                    </button>
                  </a>
                  <a href="https://expense-o-track.herokuapp.com/">
                    <button class="btn draw-border">
                      <i class="fas fa-link" style={{ fontSize: "1.2rem" }}></i>
                      {"  "}App
                    </button>
                  </a>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="project" src={battleship} alt="First slide" />
              <Carousel.Caption>
                <h5>BattleShip</h5>
                <p>
                  Browser based game for users to play Battleship against
                  computer AI
                </p>

                <div className="links">
                  <a href="https://github.com/klynnyang/battleship">
                    <button class="btn draw-border">
                      <i
                        class="fab fa-github"
                        style={{ fontSize: "1.2rem" }}
                      ></i>
                      {"  "}GitHub
                    </button>
                  </a>
                  <a href="https://klynnyang.github.io/battleship/">
                    <button class="btn draw-border">
                      <i class="fas fa-link" style={{ fontSize: "1.2rem" }}></i>
                      {"  "}App
                    </button>
                  </a>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="project" src={game} alt="Second slide" />
              <Carousel.Caption>
                <h5>Game Catalog</h5>
                <p>
                  Game review app developed with Express, MongoDB, & Node.js
                  backend.
                </p>
                <div className="links">
                  <a href="https://github.com/klynnyang/game-catalog">
                    <button class="btn draw-border">
                      <i
                        class="fab fa-github"
                        style={{ fontSize: "1.2rem" }}
                      ></i>
                      {"  "}GitHub
                    </button>
                  </a>

                  <a href="https://catalog-for-games.herokuapp.com/">
                    <button class="btn draw-border">
                      <i class="fas fa-link" style={{ fontSize: "1.2rem" }}></i>
                      {"  "}App
                    </button>
                  </a>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

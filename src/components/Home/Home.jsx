import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home" id="home" style={{ minHeight: "100vh" }}>
      <div className="home-container">
        <h2 className="mt-4">Hello, my name is Lynn!{" "}</h2>

        <h5 className="intro-text pt-4">
          Healthcare professional turned full stack developer, passionate about
          building softwares to solve problems in an elegant and efficient way.
          
          <p className="mt-4">I am excited to get behind the desk, create solutions and solve
          problems for people. My goal is to merge the best of both worlds to
          help clients and organizations grow. </p>
        </h5>
      </div>
    </div>
  );
}

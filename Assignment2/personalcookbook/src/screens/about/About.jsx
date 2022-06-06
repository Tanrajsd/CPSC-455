import React from "react";
import NavBar from "../../components/navbar/NavBar";
import "./About.css";

export default function About() {
  return (
    <div>
      <NavBar />
      <div id="viewer-container" className="viewer-container">
        <h3 className="viewer-header">About This Cookbook</h3>
        <p className="about-text">
          Welcome to my digital cook book! This is a super simple app that also
          works on your phone and is much better than wasting a ton of paper!
        </p>
        <br />
        <p className="about-text">
          The developer is Tanraj Dhillon a 4th year Business and Computer
          Science student who also Co-Founded Honest Empathy
        </p>
      </div>
    </div>
  );
}

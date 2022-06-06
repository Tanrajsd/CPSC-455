import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <h3 className="logo">My Digital Cook Book</h3>
      <a href="/home" className="navOption">
        Home
      </a>
      <a href="/about" className="navOption">
        About
      </a>
    </div>
  );
}

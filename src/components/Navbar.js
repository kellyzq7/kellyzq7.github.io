import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#222", color: "#fff" }}>
      <Link to="/" style={{ margin: "0 1rem", color: "#fff" }}>About</Link>
      <Link to="/activities" style={{ margin: "0 1rem", color: "#fff" }}>Activities</Link>
      <Link to="/projects" style={{ margin: "0 1rem", color: "#fff" }}>Projects</Link>
      <span style={{ float: "right" }}>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ margin: "0 0.5rem", color: "#fff" }}>IG</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ margin: "0 0.5rem", color: "#fff" }}>LI</a>
        <a href="https://github.com/kellyzq7" target="_blank" rel="noreferrer" style={{ margin: "0 0.5rem", color: "#fff" }}>GH</a>
      </span>
    </nav>
  );
}

export default Navbar;

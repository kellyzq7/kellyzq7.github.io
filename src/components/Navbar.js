import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/Navbar.css"

const Navbar = () => {
  const location = useLocation();
  const getIsActive = (path) => location.pathname === path;

  return (
        <div className="navbar-container">
            <div className="navbar-left">
                <Link to="/" className="site-name">Kelly Jia</Link>
                <div className="navbar-links">
                    <Link to="/" className={getIsActive("/") ? "active" : ""}>About</Link>
                    <Link to="/projects" className={getIsActive("/projects") ? "active" : ""}>Projects / Work</Link>
                    <Link to="/activities" className={getIsActive("/activities") ? "active" : ""}>Activities</Link>
                </div>
            </div>

            <div className="navbar-right">
                <a href="https://www.linkedin.com/in/kellyjia07/" target="_blank" rel="noreferrer" className="linkedin"><FaLinkedin /></a>
                <a href="https://github.com/kellyzq7" target="_blank" rel="noreferrer" className="github"><FaGithub /></a>
                <a href="https://www.instagram.com/kellyjiaaa/" target="_blank" rel="noreferrer" className="instagram"><FaInstagram /></a>
            </div>
        </div>
  );
};

export default Navbar;

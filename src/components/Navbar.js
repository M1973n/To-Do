import React from "react";
import { FaSearch, FaTh, FaSyncAlt } from "react-icons/fa";
import logo from "../components/doit.png";
import './style.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-button"></button>
        <img src={logo} alt="DoIt" className="logo" />
        <h1>DoIt</h1>
      </div>
      <div className="navbar-right">
        <FaSearch className="icon" />
        <FaTh className="icon" />
        <FaSyncAlt className="icon" />
      </div>
    </nav>
  );
}

export default Navbar;

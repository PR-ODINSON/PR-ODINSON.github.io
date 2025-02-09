import React, { useState } from "react";
import { Link } from "react-router-dom"; // Use react-router-dom instead of react-scroll
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Prithvi</div>

      {/* Navigation Links */}
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/" onClick={toggleMenu} className="nav-item">Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu} className="nav-item">About Me</Link></li>
        <li><Link to="/projects" onClick={toggleMenu} className="nav-item">Projects</Link></li>
        <li><Link to="/research" onClick={toggleMenu} className="nav-item">Research</Link></li>
        <li><Link to="/contact" onClick={toggleMenu} className="nav-item">Contact</Link></li>
      </ul>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;

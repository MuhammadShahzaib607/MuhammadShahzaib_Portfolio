import React, { useState } from "react";
import "./navbar.scss";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <div className="logo"><Link to="/" style={{color: darkMode ? "white" : "black"}}>Muhammad Shahzaib</Link></div>

      {/* Desktop Nav */}
      <ul className="navLinks">
        <Link to="/" style={{color: darkMode ? "white" : "black"}}><li>Home</li></Link>
        <Link to="/about" style={{color: darkMode ? "white" : "black"}}><li>About</li></Link>
        <Link to="/projects" style={{color: darkMode ? "white" : "black"}}><li>Projects</li></Link>
        <li>Contact</li>
      </ul>

      {/* Toggle Button */}
      <div
        className={`toggle ${darkMode ? "active" : ""}`}
        onClick={toggleTheme}
      >
        <div className="circle"></div>
      </div>

      {/* Hamburger for mobile */}
      <div className="menuIcon" onClick={toggleMenu}>
        {menuOpen ? <FiX size={28} style={{color: "white"}} /> : <FiMenu size={28} />}
      </div>

      {/* Mobile Full Screen Menu */}
      <div className={`mobileMenu ${menuOpen ? "open" : ""}`}>
        <ul style={{color: "white"}}>
          <Link to="/"><li onClick={toggleMenu}>Home</li></Link>
          <Link to="/about"><li onClick={toggleMenu}>About</li></Link>
          <Link to="/projects"><li onClick={toggleMenu}>Projects</li></Link>
          <li onClick={toggleMenu}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

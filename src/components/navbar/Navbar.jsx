import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isAdmin = localStorage.getItem("isAdmin")

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // 👉 ye effect body scroll ko control karega
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // scroll lock
    } else {
      document.body.style.overflow = "auto"; // scroll enable
    }
  }, [menuOpen]);

  return (
    <>
      {menuOpen && <div className="blackScreen"></div>}

      <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
        <div className="logo">
          <Link to="/" style={{ color: darkMode ? "white" : "black" }}>
            Muhammad Shahzaib
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="navLinks">
          <Link to="/" style={{ color: darkMode ? "white" : "black" }}>
            <li>Home</li>
          </Link>
          <Link to="/about" style={{ color: darkMode ? "white" : "black" }}>
            <li>About</li>
          </Link>
          <Link to="/projects" style={{ color: darkMode ? "white" : "black" }}>
            <li>Projects</li>
          </Link>
          {
            isAdmin ?
            <Link to="/messages">
            <li>Messages</li>
            </Link> :
            <Link>
            <li>Contact</li>
            </Link>
          }
        </ul>

        <div style={{ display: "flex" }}>
          {/* Dark mode toggle */}
          <div
            className={`toggle ${darkMode ? "active" : ""}`}
            onClick={toggleTheme}
          >
            <div className="circle"></div>
          </div>

          {/* Mobile menu icon */}
          <div className="menuIcon" onClick={toggleMenu}>
            {menuOpen ? (
              <FiX size={28} style={{ color: "white", position: "fixed", top: "35px", right: "30px" }} />
            ) : (
              <FiMenu size={28} />
            )}
          </div>
        </div>

        {/* Mobile Full Screen Menu */}
        <div className={`mobileMenu ${menuOpen ? "open" : ""}`}>
          <ul style={{ color: "white" }}>
            <Link to="/">
              <li onClick={toggleMenu}>Home</li>
            </Link>
            <Link to="/about">
              <li onClick={toggleMenu}>About</li>
            </Link>
            <Link to="/projects">
              <li onClick={toggleMenu}>Projects</li>
            </Link>
            {
              isAdmin ?
              <Link to="/messages">
              <li onClick={toggleMenu}>Messages</li>
            </Link> :
            <Link to="/contact">
              <li onClick={toggleMenu}>Contact</li>
            </Link>
            }
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React from "react";
import "./footer.scss";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`footer ${darkMode ? "dark" : "light"}`}>
      <p>© {new Date().getFullYear()} Muhammad Shahzaib. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

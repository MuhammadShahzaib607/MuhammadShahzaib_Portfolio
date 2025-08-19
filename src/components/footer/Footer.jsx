import React from "react";
import "./footer.scss";
import { useNavigate } from "react-router-dom";

const Footer = ({ darkMode }) => {
  const navigate = useNavigate()
  return (
    <footer className={`footer ${darkMode ? "dark" : "light"}`}>
      <p onClick={()=> {
        if (!localStorage.getItem("isAdmin")){
          return
        }
        localStorage.removeItem("isAdmin")
navigate("/")
        window.location.reload()
      }}>© {new Date().getFullYear()} Muhammad Shahzaib. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

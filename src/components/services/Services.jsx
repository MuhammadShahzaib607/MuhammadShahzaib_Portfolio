import React from "react";
import "./services.scss";
import { FaCode, FaServer, FaShieldAlt, FaLaptopCode } from "react-icons/fa";

const Services = ({ darkMode }) => {
  const services = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      desc: "Modern, responsive, and performant UI built with React, SCSS, and animations.",
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      desc: "Secure REST APIs with Node.js, Express, and MongoDB following MVC structure.",
    },
{
  icon: <FaLaptopCode />, 
  title: "Full Stack Development",
  desc: "End-to-end web solutions with React, Node.js, Express, and MongoDB. From frontend to backend with seamless integration.",
},
    {
      icon: <FaShieldAlt />,
      title: "Authentication & Security",
      desc: "JWT auth, rate limiting, sanitization, helmet, CORS and other backend security setups.",
    },
  ];

  return (
    <section className={`services ${darkMode ? "dark" : "light"}`}>
      <h2 className="sectionTitle">Services</h2>
      <div className="servicesGrid">
        {services.map((service, index) => (
          <div key={index} className="serviceCard">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

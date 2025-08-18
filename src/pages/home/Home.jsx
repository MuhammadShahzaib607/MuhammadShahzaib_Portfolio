import React from "react";
import "./home.scss";
import { TypeAnimation } from "react-type-animation";
import { Link, useNavigate } from "react-router-dom";
import Services from "../../components/services/Services";

const Home = ({ darkMode }) => {
  const navigate = useNavigate();

  return (
    <div className={`home ${darkMode ? "dark" : "light"}`}>
      {/* Hero Section */}
      <section className="hero">
        <div className="heroLeft">
          <h1>Muhammad Shahzaib</h1>
          <h2>I’m a MERN Stack Developer</h2>
          <TypeAnimation
            sequence={[
              "React.js",
              2000,
              "Node.js",
              2000,
              "Express.js",
              2000,
              "MongoDB",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="typing"
          />
        </div>

        <div className="heroRight">
          {/* placeholder image */}
          <div className="imagePlaceholder">
            <img src="/img/profilePic.jpeg" alt="" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>My Skills</h2>
        <div className="skillsList">
          <Skill name="HTML" level="95" color="#e34c26" />
          <Skill name="CSS" level="90" color="#264de4" />
          <Skill name="JavaScript" level="85" color="#f7df1e" />
          <Skill name="React" level="85" color="#61dafb" />
          <Skill name="Node.js" level="80" color="#68a063" />
          <Skill name="Express.js" level="70" color="#888" />
          <Skill name="MongoDB" level="80" color="#4db33d" />
          <Skill name="React Native" level="10" color="#61dafb" />
          <Skill name="Material UI" level="50" color="#0081cb" />
          <Skill name="Tailwind CSS" level="80" color="#38bdf8" />
          <Skill name="AI Integration" level="50" color="#ff9800" />
          <Skill name="GSAP" level="50" color="#88ce02" />
          <Skill name="Firebase" level="40" color="#ffca28" />
          <Skill name="GitHub" level="80" color="#333" />
          <Skill name="Vercel" level="70" color="#000" />
          <Skill name="Postman" level="75" color="#ef5b25" />
          <Skill name="Backend Advanced" level="60" color="#6c63ff" />
          <Skill name="Rate Limiting" level="85" color="#00bcd4" />
          <Skill name="Helmet" level="80" color="#607d8b" />
          <Skill name="Mongo Sanitize" level="80" color="#43a047" />
          <Skill name="CORS" level="90" color="#9c27b0" />
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="projectCards">
          <div className="projectCard">
            <h3>Medium-Style Blog App</h3>
            <p>
              Created a full-stack blogging platform using React.js and Node.js.
              Users can sign up, log in, create blog posts, like and comment on
              posts, view other users' blogs, and edit thei....
            </p>
          </div>

          <div className="projectCard">
            <h3>Loan Application Management System</h3>
            <p>
              Designed a full-featured loan application platform where users can
              register and apply for loans. Applications are reviewed by an
              admin who can either approve or reject them. Admi...
            </p>
          </div>

          <div className="projectCard">
            <h3>Makeup E-commerce Website</h3>
            <p>
              Developed a responsive e-commerce website for cosmetics with
              product listings, filtering, cart, checkout, and admin dashboard
              for product management. Integrated secu...
            </p>
          </div>
        </div>

        <button className="viewMore" onClick={() => navigate("/projects")}>
         <Link to="/projects">View More ....</Link>
        </button>
      </section>

<Services darkMode={darkMode} />

    </div>
  );
};

// Reusable Skill Bar Component
const Skill = ({ name, level, color }) => {
  return (
    <div className="skill">
      <div className="skillHeader">
        <span>{name}</span>
      </div>
      <div className="bar" style={{marginTop: "7px"}}>
        <div
          className="fill"
          style={{ width: `${level}%`, backgroundColor: "royalblue" }}
        ></div>
      </div>
    </div>
  );
};



export default Home;

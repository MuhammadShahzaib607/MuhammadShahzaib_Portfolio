import React from "react";
import "./about.scss";

const About = ({ darkMode }) => {
  return (
    <div className={`about ${darkMode ? "dark" : "light"}`}>
      <section className="aboutHero">
        <div className="left">
          <img src="/img/profilePic.jpeg" alt="Profile" />
        </div>
        <div className="right">
          <h1>About Me</h1>
          <p>
            Hi, I’m <strong>Muhammad Shahzaib</strong>, a passionate{" "}
            <strong>MERN Stack Developer</strong> from Karachi, Pakistan.  
            I specialize in building scalable, modern, and responsive web 
            applications using React, Node.js, Express, and MongoDB.
          </p>
          <p>
            With strong problem-solving skills and a deep interest in backend 
            architecture, authentication, and database management, I aim to 
            deliver full-stack solutions that are both efficient and user-friendly.  
            My focus is always on writing clean code and creating seamless user experiences.
          </p>
        </div>
      </section>

      {/* Skills Highlight */}
      <section className="aboutSkills">
        <h2>Technical Expertise</h2>
        <ul>
          <li>Frontend: React.js, Redux, SCSS, Tailwind CSS, Material UI</li>
          <li>Backend: Node.js, Express.js, REST APIs, Authentication (JWT, OAuth)</li>
          <li>Database: MongoDB, Mongoose, Firebase</li>
          <li>Dev Tools: GitHub, Postman, Vercel, Deployment & Hosting</li>
          <li>Other: Security (CORS, Helmet, Rate Limiting, Mongo Sanitize)</li>
        </ul>
      </section>

      {/* Goals */}
      <section className="aboutGoals">
        <h2>My Vision & Goals</h2>
        <p>
          My mission is to become a highly skilled full-stack engineer capable 
          of handling complex projects independently.  
          I aspire to teach web development in the future and guide 
          new developers in their learning journey.  
          I’m also preparing myself to work on larger-scale projects, 
          startups, and SaaS platforms.
        </p>
      </section>

      {/* Personal Info */}
      <section className="aboutPersonal">
        <h2>Personal Details</h2>
        <div className="infoGrid">
          <div><strong>Name:</strong> Muhammad Shahzaib</div>
          <div><strong>From:</strong> Karachi, Pakistan</div>
          <div><strong>Profession:</strong> MERN Stack Developer</div>
          <div><strong>Languages:</strong> English, Urdu</div>
          <div><strong>Future Goal:</strong> Teach and Mentor Developers</div>
        </div>
      </section>
    </div>
  );
};

export default About;

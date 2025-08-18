import React from "react";
import "./projects.scss";

const projectsData = [
  {
    title: "Medium-Style Blog App",
    desc: "Created a full-stack blogging platform using React.js and Node.js. Users can sign up, log in, create blog posts, like and comment on posts, view other users' blogs, and edit their own profiles. The application includes a protected route system, profile pages, a blog detail page, and a dashboard for managing personal content.",
    codeLink: "https://github.com/muhammadshahzaib607/medium_clone/",
    liveLink: "https://cosmetics-demo.com",
},
{
    title: "Loan Application Management System",
    desc: "Designed a full-featured loan application platform where users can register and apply for loans. Applications are reviewed by an admin who can either approve or reject them. Admin can view all loan data in one place. Users have a dashboard where they can track their total, approved, and rejected loan applications. All functionality is protected through secure authentication.",
    codeLink: "https://github.com/muhammadshahzaib607/bankLoan_app/",
    liveLink: "https://menu-demo.com",
  },
  {
    title: "Makeup E-commerce Website",
    desc: "Developed a responsive e-commerce website for cosmetics with product listings, filtering, cart, checkout, and admin dashboard for product management. Integrated secure payment flow and responsive UI for seamless shopping.",
    codeLink: "https://github.com/muhammadshahzaib607/makeup_website/",
    liveLink: "https://portfolio-demo.com",
  },
];

const Projects = ({darkMode}) => {
  return (
    <section className={`projectsPage ${darkMode ? "dark" : "light"}`}>
      <h2 className="heading" style={{color: darkMode ? "white" : "black"}}>My Projects</h2>
      <div className="grid">
        {projectsData.map((project, index) => (
          <div className={`card`} style={{
            backgroundColor: darkMode ? "black": "white",
            color: darkMode ? "white": "black"
          }} key={index}>
            <h3 style={{marginBottom: "10px"}}>{project.title}</h3>
            <p style={{lineHeight: "22px", marginBottom: "14px"}}>{project.desc}</p>
            <div className="actions">
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btnOutline"
              >
                View Code
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

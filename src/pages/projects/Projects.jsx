import React from "react";
import "./projects.scss";

const projectsData = [
  {
    title: "Makeup E-commerce Website",
    desc: "Developed a responsive blog website where users can create and read unlimited blogs, with a clean and minimal UI for smooth reading experience.",
    codeLink: "https://github.com/MuhammadShahzaib607/Blog-App",
    liveLink: "https://shahzaib-blog-app.vercel.app/",
    isLinkAvailable: true,
  },
  {
    title: "Makeup E-commerce Website",
    desc: "Developed a responsive e-commerce website for cosmetics with product listings, filtering, cart, checkout, and admin dashboard for product management. Integrated secure payment flow and responsive UI for seamless shopping.",
    codeLink: "https://github.com/muhammadshahzaib607/makeup_website/",
    liveLink: "https://as-cosmo.vercel.app",
    isLinkAvailable: true,
  },
  {
    title: "Furniture E-commerce Website",
    desc: "Built a responsive furniture e-commerce platform with a homepage for recent products, a shop page for all items, a cart and secure checkout system, plus an about page. Included a hidden admin panel for adding products and managing customer orders.",
    codeLink: "https://github.com/muhammadshahzaib607/smartFriendFurniture/",
    liveLink: "https://smart-friend-furniture.vercel.app/",
    isLinkAvailable: true,
  },
  {
    title: "Fintracker – Accounting Web App",
    desc: "Developed a financial tracking application with React.js, Node.js, Express.js, and MongoDB. The app features secure authentication for signup, login, and logout, and enables users to manage income and expense records with create, edit, and delete functionality. Implemented role-based access control to protect private routes and ensure secure data handling.",
    codeLink: "https://github.com/muhammadshahzaib607/FinTracker/",
    liveLink: "https://fin-tracker-app.vercel.app/",
    isLinkAvailable: true,
  },
  {
    title: "AI Chatbot – Gemini API Integration",
    desc: "Built an AI-powered chatbot using Google’s Gemini API (gemini-1.5-flash model) to provide intelligent and conversational responses in real time. Integrated the model into a web application with a clean and responsive interface, ensuring smooth interaction between users and the AI.",
    codeLink: "https://github.com/muhammadshahzaib607/AI-Model/",
    liveLink: "https://shahzaib-ai-model.vercel.app/",
    isLinkAvailable: true,
  },
  {
    title: "Medium-Style Blog App",
    desc: "Created a full-stack blogging platform using React.js and Node.js. Users can sign up, log in, create blog posts, like and comment on posts, view other users' blogs, and edit their own profiles. The application includes a protected route system, profile pages, a blog detail page, and a dashboard for managing personal content.",
    codeLink: "https://github.com/muhammadshahzaib607/medium_clone/",
    liveLink: "https://cosmetics-demo.com",
    isLinkAvailable: false,
},
{
    title: "Loan Application Management System",
    desc: "Designed a full-featured loan application platform where users can register and apply for loans. Applications are reviewed by an admin who can either approve or reject them. Admin can view all loan data in one place. Users have a dashboard where they can track their total, approved, and rejected loan applications. All functionality is protected through secure authentication.",
    codeLink: "https://github.com/muhammadshahzaib607/bankLoan_app/",
    liveLink: "https://menu-demo.com",
    isLinkAvailable: false,
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
              {
                project.isLinkAvailable &&
                <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Live Demo
              </a>
              }
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

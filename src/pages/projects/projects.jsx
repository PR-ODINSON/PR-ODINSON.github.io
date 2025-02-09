import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import "./projects.css";

const projectsData = [
  {
    title: "MINDSCAN - Mental Health Detection",
    description: "AI-powered model achieving 95% accuracy in detecting mental health conditions using predictive analytics and deep learning.",
    githubLink: "https://github.com/prithvi/mindscan",
    technologies: ["Python", "TensorFlow", "Scikit-Learn"],
    image: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Face Prediction Model",
    description: "A deep learning-based face prediction model that generates missing facial features with high accuracy.",
    githubLink: "https://github.com/prithvi/face-prediction",
    technologies: ["Python", "OpenCV", "Deep Learning"],
    image: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Vaccine Prediction Model",
    description: "A predictive model with 98% accuracy for vaccine effectiveness using advanced data science techniques.",
    githubLink: "https://github.com/prithvi/vaccine-prediction",
    technologies: ["Python", "Machine Learning", "Pandas"],
    image: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Network Anomaly Detection",
    description: "Detects network anomalies using AI, helping in cybersecurity applications.",
    githubLink: "https://github.com/prithvi/network-anomaly",
    technologies: ["AI", "Cybersecurity", "ML"],
    image: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            className={`project-card ${expandedProject === index ? "expanded" : ""} ${index % 2 === 0 ? "left" : "right"}`} 
            onClick={() => toggleProject(index)}
          >
            {index % 2 === 0 ? (
              <>
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-info">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="github-icon" />
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="project-info">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="github-icon" />
                  </a>
                </div>
                <img src={project.image} alt={project.title} className="project-image" />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

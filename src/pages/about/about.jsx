import React from "react";
import { FaGithub, FaLinkedin, FaPython, FaDatabase, FaRobot, FaCode, FaCloud, FaDownload } from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiMysql, SiMongodb, SiReact, SiFastapi } from "react-icons/si";
import "./about.css";

const AboutMe = () => {
  return (
    <div className="about">
      {/* Header Section */}
      <section className="about-header">
        <h1>About Me</h1>
        <p>I'm Prithvi, an AI/ML Engineer passionate about Deep Learning, Data Science, and AI-powered solutions.</p>
      </section>

      {/* College & Socials */}
      <section className="details">
        <div className="info-card">
          <h2>🎓 Education</h2>
          <p>B.Tech in Computer Science & Engineering</p>
          <p><strong>IITRAM, Ahmedabad</strong> | Class of 2027</p>
        </div>
       
      </section>

      {/* Skills Section */}
      <section className="skills">
        
        <h2>🚀 Skills & Expertise</h2>

         {/* Tech Stack */}
      <section className="tech-stack">
 
 <div className="tech-icons">
   <SiTensorflow className="tech-icon" />
   <SiPytorch className="tech-icon" />
   <FaDatabase className="tech-icon" />
   <SiMysql className="tech-icon" />
   <SiMongodb className="tech-icon" />
   <SiReact className="tech-icon" />
   <SiFastapi className="tech-icon" />
   <FaCode className="tech-icon" />
 </div>
</section>
        <div className="skills-grid">
          <div className="skill-item"><FaPython /> Python & AI/ML</div>
          <div className="skill-item"><SiTensorflow /> TensorFlow & Deep Learning</div>
          <div className="skill-item"><SiPytorch /> PyTorch & Neural Networks</div>
          <div className="skill-item"><FaDatabase /> SQL & Database Management</div>
          <div className="skill-item"><SiMysql /> MySQL & MongoDB</div>
          <div className="skill-item"><FaRobot /> AI Model Development</div>
          <div className="skill-item"><SiReact /> React.js & Frontend</div>
          <div className="skill-item"><SiFastapi /> FastAPI & Backend Development</div>
          <div className="skill-item"><FaCloud /> Cloud Computing & Deployment</div>
        </div>
      </section>

     

      {/* Future Goals */}
      <section className="goals">
        <h2>🎯 Future Goals</h2>
        <p>
          I aim to contribute to cutting-edge AI research, specializing in healthcare AI, predictive analytics, and deep learning architectures.
          My goal is to develop AI-driven solutions for real-world impact and explore explainable AI for better interpretability.
        </p>
      </section>

      {/* Resume Download */}
      <section className="resume">
        <a href="/resume.pdf" download className="resume-btn">
          <FaDownload /> Download My Resume
        </a>
      </section>
    </div>
  );
};

export default AboutMe;

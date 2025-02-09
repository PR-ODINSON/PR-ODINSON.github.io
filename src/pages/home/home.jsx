import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { 
  FaPython, FaDatabase, FaLaptopCode, FaRobot, 
  FaGithub, FaLinkedin, FaCode, FaUserTie 
} from "react-icons/fa";
import { MdWork, MdOutlineSchool, MdSupervisorAccount } from "react-icons/md";
import "./home.css"; // Import CSS

const Home = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: ["AI/ML Engineer", "Data Scientist", "Tech Enthusiast", "Problem Solver"],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy(); // Cleanup on unmount
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="home-des">
      <section className="home-hero">
        <div className="home-hero-content">
          <h1>Hi, I'm Prithvi 👋</h1>
          <p className="home-tagline">
            <span ref={typingRef}></span>
          </p>
          <p className="home-intro">
            Passionate about Artificial Intelligence, Deep Learning, and Predictive Modeling.
            I love building intelligent systems that make a real impact. 🚀
          </p>
          <div className="home-buttons">
            <a href="#projects" className="home-btn">View Projects</a>
          </div>
        </div>
        <div className="home-hero-image">
          <img src="/me.png" alt="Prithvi" />
        </div>
      </section>

      {/* About Me Section */}
      <section className="home-about">
      <div className="home-about-image">
          <img src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600" alt="About Me" />
        </div>
        <div className="home-about-content">
          <h2>About Me <FaUserTie /></h2>
          <p>
            I'm a Computer Science Engineer with a deep interest in AI and Machine Learning.
            I specialize in building intelligent models, data-driven solutions, and research-driven applications.
            I love solving complex problems and constantly learning new technologies.
          </p>
        </div>
        
      </section>

      {/* Positions of Responsibility (PORs) */}
      <section className="home-por">
        <div className="home-por-header">
          <h2>Leadership & Roles <MdSupervisorAccount /></h2>
          
        </div>
        <div className="home-por-grid">
          {[{
            icon: <MdWork />, title: "Mentor of AI/ML at Unstop", 
            description: "Guiding students in AI/ML projects, helping them with concepts and career growth."
          }, {
            icon: <MdOutlineSchool />, title: "Student Coordinator, IITRAM Coding Club", 
            description: "Organizing workshops, coding competitions, and fostering a strong tech community."
          }, {
            icon: <MdWork />, title: "Campus Ambassador at GeeksforGeeks", 
            description: "Promoting coding events, conducting sessions, and helping peers with DSA and coding."
          }, {
            icon: <MdWork />, title: "Head of Content, Career Development Cell", 
            description: "Curating high-quality content for students to help with placements and career guidance."
          }].map((role, index) => (
            <div className="home-por-item" key={index}>
              <div className="home-por-card">
                <div className="home-por-front">{role.icon} <span>{role.title}</span></div>
                <div className="home-por-back">{role.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
};

export default Home;

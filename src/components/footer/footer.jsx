import React from "react";
import "./footer.css";
import { FaLinkedin, FaTwitter, FaGithub, FaMedium, FaReddit } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { PiArrowCircleUpBold } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About Section */}
        <div className="footer-about">
          <h2>Prithviraj Verma</h2>
          <p>AI/ML Enthusiast | Researcher | Developer</p>
          <p>Passionate about AI-driven innovations in healthcare and predictive modeling.</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-links">
          <h3>Connect with me</h3>
          <div className="social-icons">
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://medium.com/@your-handle" target="_blank" rel="noopener noreferrer"><FaMedium /></a>
            <a href="https://www.reddit.com/user/your-handle" target="_blank" rel="noopener noreferrer"><FaReddit /></a>
            <a href="https://leetcode.com/your-handle" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
            <a href="https://auth.geeksforgeeks.org/user/your-profile" target="_blank" rel="noopener noreferrer"><SiGeeksforgeeks /></a>
            
            {/* Custom Unstop Icon */}
            <a href="https://unstop.com/your-mentor-link" target="_blank" rel="noopener noreferrer" className="unstop-icon">
              U
            </a>
          </div>
        </div>
        
       

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Prithviraj Verma. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

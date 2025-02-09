import React, { useState } from "react";
import "./research.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";

const researchData = [
  {
    title: "Insomnia Detection using PPG Signals",
    description: "A multi-model approach combining 1D CNN, 2D CNN, and Vision Transformer to classify sleep disorders based on PPG signals.",
    details: "Developed under Dr. Manish Sharma, this project explores deep learning models for insomnia detection using raw, wavelet, and image-transformed PPG signals.",
    link: "https://github.com/your-repo-link",
  },
  {
    title: "Emotion Recognition via PPG",
    description: "Utilizing deep learning to classify emotions based on PPG data from multiple subjects.",
    details: "A dataset-based approach implementing segmentation techniques, feature engineering, and CNN models to enhance classification accuracy.",
    link: "https://github.com/your-repo-link",
  },
  {
    title: "Sleep Spindle & K-Complex Detection",
    description: "Detection of crucial sleep microstructures using signal processing and machine learning techniques.",
    details: "Applying explainable AI techniques to interpret model decisions and improve biomedical signal classification.",
    link: "https://github.com/your-repo-link",
  },
];

const Research = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="research-container">
      {/* Hero Section */}
      <section className="research-hero">
        <h1 className="animated-title">Research & Innovations</h1>
        <p>Exploring AI-driven solutions for healthcare and biomedical applications.</p>
      </section>

      {/* Research Areas */}
      <section className="research-areas">
        <h2>My Research Interests</h2>
        <div className="research-grid">
          <div className="research-item">🔬 AI in Healthcare</div>
          <div className="research-item">📊 Predictive Modeling</div>
          <div className="research-item">💡 Explainable AI</div>
          <div className="research-item">📡 Signal Processing</div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="featured-research">
        <h2>Featured Research Projects</h2>
        {researchData.map((project, index) => (
          <div key={index} className={`research-card ${expanded === index ? "expanded" : ""}`} onClick={() => toggleExpand(index)}>
            <div className="card-header">
              <h3>{project.title}</h3>
              <MdExpandMore className={`expand-icon ${expanded === index ? "rotate" : ""}`} />
            </div>
            <p>{project.description}</p>
            {expanded === index && (
              <div className="card-details">
                <p>{project.details}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-link">
                  <FaGithub /> View on GitHub
                </a>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Publications & Links */}
      <section className="publications">
        <h2>Publications & Resources</h2>
        <ul>
          <li><a href="https://example.com/paper1" target="_blank" rel="noopener noreferrer">📄 Deep Learning for Sleep Disorder Detection <FaExternalLinkAlt /></a></li>
          <li><a href="https://example.com/paper2" target="_blank" rel="noopener noreferrer">📄 AI in Biomedical Signal Processing <FaExternalLinkAlt /></a></li>
        </ul>
      </section>
    </div>
  );
};

export default Research;

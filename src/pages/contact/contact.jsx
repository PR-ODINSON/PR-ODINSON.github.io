import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xqaelwjd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully! ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. ❌ Try again.");
      }
    } catch (error) {
      toast.error("Network error! ❌ Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <ToastContainer position="bottom-right" autoClose={3000} />
      <div className="contact-container">
        <h1>Get in Touch</h1>

        <div className="contact-content">
          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Contact Me</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Contact Info & Socials */}
          <div className="contact-info">
            <h2>Let's Connect</h2>
            <p><FaEnvelope /> prithvi@example.com</p>
            <p><FaPhone /> +91 98765 43210</p>
            <div className="social-links">
              <a href="https://github.com/prithvi" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://linkedin.com/in/prithvi" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

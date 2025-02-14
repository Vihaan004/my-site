import React from "react";
import "./SocialLinks.css";
// import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
    </div>
  );
}

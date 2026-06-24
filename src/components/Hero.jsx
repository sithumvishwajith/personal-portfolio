import React from 'react';
import { ArrowUpRight, Download, Calendar } from 'lucide-react';
import { Github, Linkedin, Kaggle } from './BrandIcons';
import './Hero.css';

// Import the user's profile image
import heroImg from '../assets/profile.png';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        {/* Left Column: Bio & Details */}
        <div className="hero-content">
          {/* Status Pills */}
          <div className="pills-row">
            <div className="location-pill">
              <span className="location-text">Elpitiya, Sri Lanka</span>
            </div>
          </div>
          
          {/* Main Serif Title */}
          <h1 className="hero-title serif-title">
            Sithum Bimsara <br /> Vishwajith
          </h1>
          
          {/* Orange Role Subtitle */}
          <h2 className="hero-subtitle-orange">
            Data Science Undergraduate & AI/ML Enthusiast
          </h2>

          {/* Description */}
          <p className="hero-description-warm">
            I bridge the gap between complex datasets and actionable insights—building predictive models, running statistical analyses, and engineering data pipelines to solve real-world problems.
          </p>

          {/* Inline Badges */}
          <div className="role-badges-row">
            <span className="role-outline-badge">Data Science</span>
            <span className="role-outline-badge">Data Analytics</span>
            <span className="role-outline-badge">Machine Learning</span>
            <span className="role-outline-badge">Deep Learning</span>
          </div>

          {/* Call-to-actions */}
          <div className="hero-ctas-row">
            <a href="#projects" className="btn btn-primary cta-btn-primary">
              Explore Projects <ArrowUpRight size={18} />
            </a>
            <a href="#skills" className="btn btn-secondary cta-btn-secondary">
              Explore Skills
            </a>
            <a href="/resume.pdf" download="Sithum_Bimsara_CV.pdf" className="btn btn-secondary cta-btn-secondary cta-download">
              <Download size={16} /> Download CV
            </a>
          </div>


        </div>

        {/* Right Column: User Portrait Image */}
        <div className="hero-portrait-container">
          <div className="portrait-card">
            <img src={heroImg} alt="Sithum Bimsara" className="portrait-image" />
          </div>
          
          {/* Social Platform Badges */}
          <div className="social-pills-container profile-socials">
            <a href="https://www.linkedin.com/in/sithumbimsara" target="_blank" rel="noopener noreferrer" className="social-pill">
              <Linkedin size={16} /> <span>LinkedIn</span>
            </a>
            <a href="https://github.com/sithumvishwajith" target="_blank" rel="noopener noreferrer" className="social-pill">
              <Github size={16} /> <span>GitHub</span>
            </a>
            <a href="https://www.kaggle.com/sithumbimsara" target="_blank" rel="noopener noreferrer" className="social-pill">
              <Kaggle size={16} /> <span>Kaggle</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

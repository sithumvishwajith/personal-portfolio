import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Github, Linkedin, Kaggle } from './BrandIcons';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Top: Logo & Info */}
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="logo-icon text-gradient" style={{ fontSize: '2.2rem', fontWeight: '800', lineHeight: 1 }}>SB</span>
            </a>
            <p className="footer-tagline">
              Unlocking insights and building intelligent models through mathematical rigor and analytics.
            </p>
          </div>

          <div className="footer-socials">
            <a href="https://github.com/sithumvishwajith" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.kaggle.com/sithumbimsara" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Kaggle">
              <Kaggle size={18} />
            </a>
            <a href="https://www.linkedin.com/in/sithumbimsara" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>

          </div>
        </div>

        {/* Middle: Links */}
        <div className="footer-middle">
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certificates">Certificates</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Bottom: Copyright & Top trigger */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Sithum Bimsara. All rights reserved.
          </p>
          
          <a href="#" className="back-to-top glass" onClick={handleScrollTop} aria-label="Back to top">
            <ArrowUp size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
}

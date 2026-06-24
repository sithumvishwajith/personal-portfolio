import React, { useState } from 'react';
import { ExternalLink, Brain, Database, LineChart, Activity } from 'lucide-react';
import { Github } from './BrandIcons';
import './Projects.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All','Data Analytics','Machine Learning','Deep Learning & NLP','Generative AI','Web Apps','Mobile Apps'];

  const projects = [
    {
      id: 1,
      title: 'Predictive Churn Model',
      category: 'Machine Learning',
      description: 'A binary classification system using XGBoost and Random Forests to identify high-risk subscriber accounts, boasting a 91% F1-score with built-in feature importance visualizations.',
      tags: ['Python', 'Scikit-Learn', 'XGBoost', 'Streamlit'],
      gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.4) 0%, rgba(59, 130, 246, 0.4) 100%)',
      glowColor: 'rgba(139, 92, 246, 0.3)',
      icon: <Brain size={40} className="project-card-icon" />,
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 2,
      title: 'ResNet50 Image Classifier',
      category: 'Machine Learning',
      description: 'A multi-class convolutional neural network (CNN) trained with transfer learning (ResNet50) on 50k images to classify target domains with fine-tuned hyperparameters.',
      tags: ['TensorFlow', 'Keras', 'Python', 'Jupyter'],
      gradient: 'linear-gradient(135deg, rgba(217, 70, 239, 0.4) 0%, rgba(244, 63, 94, 0.4) 100%)',
      glowColor: 'rgba(217, 70, 239, 0.3)',
      icon: <Activity size={40} className="project-card-icon" />,
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 3,
      title: 'Retail BI ETL Pipeline',
      category: 'Data Engineering',
      description: 'An end-to-end ELT data pipeline extracting retail transaction files, transforming structural tables using Python, loading into PostgreSQL, and displaying business health metrics on Tableau.',
      tags: ['SQL', 'PostgreSQL', 'Python', 'Tableau'],
      gradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.4) 0%, rgba(16, 185, 129, 0.4) 100%)',
      glowColor: 'rgba(6, 182, 212, 0.3)',
      icon: <Database size={40} className="project-card-icon" />,
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 4,
      title: 'Social NLP Sentiment Engine',
      category: 'Data Analytics',
      description: 'A text analysis engine scraping social feeds, tokenizing, and running Transformer-based sentiment predictions to forecast market trend indicators.',
      tags: ['PyTorch', 'HuggingFace', 'Seaborn', 'Pandas'],
      gradient: 'linear-gradient(135deg, rgba(239, 68, 68, 0.4) 0%, rgba(245, 158, 11, 0.4) 100%)',
      glowColor: 'rgba(239, 68, 68, 0.3)',
      icon: <LineChart size={40} className="project-card-icon" />,
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section">
      <h2 className="section-title">My Projects</h2>
      
      {/* Category Filters */}
      <div className="filter-container">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? 'active' : 'glass'}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid grid grid-2">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card glass">
            <div 
              className="project-image-wrapper"
              style={{ 
                background: project.gradient,
                boxShadow: `inset 0 0 20px ${project.glowColor}`
              }}
            >
              {/* Abstract decorative grid pattern */}
              <div className="grid-overlay-decor"></div>
              
              {/* Centered themed icon */}
              <div className="project-icon-center">
                {project.icon}
              </div>

              <div className="project-overlay">
                <div className="overlay-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="overlay-icon-btn" aria-label="GitHub Repository">
                    <Github size={20} />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="overlay-icon-btn" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="project-info">
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

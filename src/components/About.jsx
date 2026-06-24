import React from 'react';
import { Award, Database, Brain, Code, CheckCircle2 } from 'lucide-react';
import './About.css';

export default function About() {
  const stats = [
    { icon: <Award className="stat-icon" />, number: '3.1+', label: 'Current GPA' },
    { icon: <Database className="stat-icon" />, number: '15+', label: 'Datasets Analyzed' },
    { icon: <Brain className="stat-icon" />, number: '8+', label: 'ML Models Built' },
    { icon: <Code className="stat-icon" />, number: '25k+', label: 'Lines of Code' },
  ];

  const coreValues = [
    'Rigorous statistical validation & hypothesis testing',
    'Clean, reproducible Jupyter Notebooks',
    'Interactive, narrative-driven data visualizations',
    'Scalable data preprocessing & feature engineering',
    'Robust model evaluation & metrics selection',
    'Efficient SQL querying & data pipeline architecture',
  ];

  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-grid">
        {/* Left: Stats Dashboard */}
        <div className="stats-dashboard">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card glass">
                <div className="stat-icon-wrapper">{stat.icon}</div>
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Bio & Values */}
        <div className="bio-container">
          <h3 className="bio-subtitle">
            Unlocking insights from raw data to solve <span className="text-gradient">complex problems</span>
          </h3>
          <p className="bio-text">
            I am a Data Science undergraduate passionate about statistical modeling, predictive analytics, and machine learning. 
            I specialize in transforming raw, unstructured datasets into clear, actionable business insights and high-accuracy models.
          </p>
          <p className="bio-text">
            My academic and practical philosophy centers on analytical rigor, mathematical foundations, and reproducible research. 
            I ensure every model is validated thoroughly and every visualization tells a compelling, data-driven story.
          </p>

          <h4 className="values-title">My Professional Standard</h4>
          <ul className="values-list">
            {coreValues.map((value, index) => (
              <li key={index} className="value-item">
                <CheckCircle2 className="value-icon" size={18} />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

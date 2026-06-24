import React from 'react';
import { Code, Globe, Layers, Server, Database, Share2, GitBranch, Terminal, Box, Cpu, Brain, BarChart2 } from 'lucide-react';
import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages & Core DS',
      icon: <Layers className="category-icon" />,
      skills: [
        { name: 'Python (Pandas, NumPy)', level: 95, icon: <Code size={16} /> },
        { name: 'SQL (PostgreSQL/MySQL)', level: 88, icon: <Database size={16} /> },
        { name: 'R Language', level: 75, icon: <Globe size={16} /> },
        { name: 'C++ / Object Oriented', level: 80, icon: <Cpu size={16} /> },
      ],
    },
    {
      title: 'Machine Learning & AI',
      icon: <Brain className="category-icon" />,
      skills: [
        { name: 'Scikit-Learn (ML Models)', level: 50, icon: <Brain size={16} /> },
        { name: 'Deep Learning (TensorFlow)', level: 82, icon: <Cpu size={16} /> },
        { name: 'Feature Engineering', level: 92, icon: <Layers size={16} /> },
        { name: 'Model Tuning & Metrics', level: 88, icon: <Share2 size={16} /> },
      ],
    },
    {
      title: 'Visuals & Developer Tools',
      icon: <BarChart2 className="category-icon" />,
      skills: [
        { name: 'Matplotlib & Seaborn', level: 90, icon: <BarChart2 size={16} /> },
        { name: 'Power BI', level: 85, icon: <Layers size={16} /> },
        { name: 'Git & GitHub Control', level: 88, icon: <GitBranch size={16} /> },
        { name: 'Jupyter & Google Colab', level: 95, icon: <Terminal size={16} /> },
      ],
    },
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills & Expertise</h2>
      <p className="skills-subtitle">
        A breakdown of my technical stack and proficiency across data manipulation languages, ML modelling, and analytics visualization dashboards.
      </p>

      <div className="skills-grid grid grid-3">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="skills-category glass">
            <div className="category-header">
              <div className="category-icon-wrapper">{category.icon}</div>
              <h3 className="category-title">{category.title}</h3>
            </div>
            
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name-wrapper">
                      {skill.icon}
                      <span className="skill-name">{skill.name}</span>
                    </span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="progress-bar-bg">
                    <div 
                      className="progress-bar-fill" 
                      style={{ 
                        width: `${skill.level}%`,
                        background: catIndex === 0 
                          ? 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))' 
                          : catIndex === 1
                            ? 'linear-gradient(90deg, var(--accent-primary), var(--accent-tertiary))'
                            : 'linear-gradient(90deg, var(--accent-secondary), var(--accent-tertiary))'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

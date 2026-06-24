import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import './Experience.css';

export default function Experience() {
  const timelineItems = [
    {
      id: 1,
      type: 'work',
      role: 'Machine Learning Intern',
      company: 'DataSense Analytics',
      period: '2025 - Present',
      description: 'Developing and fine-tuning predictive customer models using Python and Scikit-Learn. Designing automated ETL scripts to preprocess messy datasets and pipeline structured data into SQL databases.',
      icon: <Briefcase size={20} />,
    },
    {
      id: 2,
      type: 'work',
      role: 'Data Science Research Assistant',
      company: 'Apex Intelligence Lab',
      period: '2024 - 2025',
      description: 'Co-authored statistical analyses on local climate data. Engineered CNN image classification models using TensorFlow to evaluate satellite imagery metrics with 89% accuracy.',
      icon: <Briefcase size={20} />,
    },
    {
      id: 3,
      type: 'education',
      role: 'B.S. in Data Science (Undergraduate)',
      company: 'State University',
      period: '2023 - 2027 (Expected)',
      description: 'Specializing in Machine Learning, Statistical Inference, Database Systems, and Neural Networks. Active member of the university AI and Analytics club. Current GPA: 3.8/4.0.',
      icon: <GraduationCap size={20} />,
    },
  ];

  return (
    <section id="experience" className="section">
      <h2 className="section-title">My Journey</h2>
      
      <div className="timeline-container">
        {/* The vertical timeline track */}
        <div className="timeline-line"></div>

        <div className="timeline-list">
          {timelineItems.map((item) => (
            <div key={item.id} className="timeline-item">
              {/* Node Icon */}
              <div className={`timeline-node ${item.type === 'work' ? 'node-work' : 'node-edu'}`}>
                {item.icon}
              </div>

              {/* Content Card */}
              <div className="timeline-card glass">
                <div className="card-header-timeline">
                  <span className={`role-badge ${item.type === 'work' ? 'badge-work' : 'badge-edu'}`}>
                    {item.type === 'work' ? 'Work' : 'Education'}
                  </span>
                  <div className="date-wrapper">
                    <Calendar size={14} className="calendar-icon" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h3 className="timeline-role">{item.role}</h3>
                <h4 className="timeline-company">{item.company}</h4>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

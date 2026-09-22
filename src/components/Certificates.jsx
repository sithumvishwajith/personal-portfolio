import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import './Certificates.css';

export default function Certificates() {
  const certificateItems = [
    {
      id: 1,
      title: 'Python',
      issuer: 'Kaggle',
      date: 'August 2026',
      description: 'Successfully completed the Python course on Kaggle Learn.',
      link: '/Kaggle_Python_Certificate.png',
    },
    {
      id: 2,
      title: 'Data Structures & Algorithms in Python',
      issuer: 'Simplilearn SkillUP',
      date: 'September 2026',
      description: 'Successfully completed the online course: Data Structures & Algorithms in Python (Certificate code: 10769447).',
      link: '#',
    },
  ];

  return (
    <section id="certificates" className="section">
      <h2 className="section-title">Certifications</h2>
      <p className="section-subtitle text-center" style={{ maxWidth: '600px', margin: '0 auto 40px', color: 'var(--text-secondary)', textAlign: 'center' }}>
        A collection of professional certifications showcasing my continuous learning journey and technical skill development.
      </p>

      <div className="certificates-grid">
        {certificateItems.map((cert) => (
          <div key={cert.id} className="cert-card glass">
            <div className="cert-card-header">
              <div className="cert-icon-wrapper">
                <Award size={24} className="cert-icon" />
              </div>
              <div className="cert-date-badge">
                <Calendar size={14} className="calendar-icon" />
                <span>{cert.date}</span>
              </div>
            </div>

            <div className="cert-body">
              <span className="cert-issuer">{cert.issuer}</span>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-description">{cert.description}</p>
            </div>

            <div className="cert-footer">
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary cert-btn">
                <span>Verify Credential</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

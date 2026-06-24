import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for field on change
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "87de2f0a-68d3-49cc-b7d6-eb6dc4e9ae5d", // We will tell the user how to get this
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setIsSubmitting(false);
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setIsSubmitting(false);
      alert("Failed to send message. Please try again later.");
    }
  };

  const contactDetails = [
    {
      icon: <Mail className="contact-icon" />,
      title: 'Email Me',
      value: 'sithumbimsara2001@gmail.com',
      link: 'mailto:sithumbimsara2001@gmail.com',
    },
    {
      icon: <MapPin className="contact-icon" />,
      title: 'Location',
      value: 'Elpitiya, Sri Lanka',
      link: 'https://maps.google.com',
    },
    {
      icon: <Phone className="contact-icon" />,
      title: 'Call Me',
      value: '+94 (77) 296-6601',
      link: 'tel:+94772966601',
    },
  ];

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-grid">
        {/* Left: Contact Info */}
        <div className="contact-info">
          <h3 className="contact-info-title">Let's build something <span className="text-gradient-cyan">data-driven</span></h3>
          <p className="contact-info-desc">
            Have an interesting dataset, a machine learning problem, or a research collaboration in mind? Reach out to discuss how we can work together.
          </p>

          <div className="contact-details-list">
            {contactDetails.map((detail, index) => (
              <a 
                href={detail.link} 
                key={index} 
                className="contact-detail-card glass"
                target={detail.title === 'Location' ? '_blank' : '_self'}
                rel="noopener noreferrer"
              >
                <div className="contact-icon-wrapper">{detail.icon}</div>
                <div className="contact-detail-text">
                  <h4 className="detail-title">{detail.title}</h4>
                  <p className="detail-value">{detail.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="contact-form-container glass">
          {submitSuccess ? (
            <div className="success-message">
              <CheckCircle2 className="success-icon animate-float" size={60} />
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out. I've received your request and will respond within 24 hours.</p>
              <button className="btn btn-primary" onClick={() => setSubmitSuccess(false)}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-group-row">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'input-error' : ''}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <span className="error-text">
                      <AlertCircle size={14} /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'input-error' : ''}
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <span className="error-text">
                      <AlertCircle size={14} /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={errors.subject ? 'input-error' : ''}
                  placeholder="Project Collaboration"
                  disabled={isSubmitting}
                />
                {errors.subject && (
                  <span className="error-text">
                    <AlertCircle size={14} /> {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'input-error' : ''}
                  placeholder="Tell me about your project details..."
                  disabled={isSubmitting}
                ></textarea>
                {errors.message && (
                  <span className="error-text">
                    <AlertCircle size={14} /> {errors.message}
                  </span>
                )}
              </div>

              <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    Sending... <Loader2 className="spinner" size={18} />
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )
                }
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

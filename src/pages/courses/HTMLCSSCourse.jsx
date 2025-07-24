import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HTMLCSSCourse.css';

const HTMLCSSCourse = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const courseModules = [
    {
      title: "HTML Fundamentals",
      topics: [
        "HTML Structure and Semantics",
        "Forms and Input Elements",
        "Tables and Lists",
        "Media Elements (Images, Video, Audio)",
        "HTML5 New Features and APIs"
      ]
    },
    {
      title: "CSS Styling and Layout",
      topics: [
        "CSS Selectors and Properties",
        "Box Model and Positioning",
        "Flexbox and Grid Layout",
        "Responsive Design Principles",
        "CSS Animations and Transitions"
      ]
    },
    {
      title: "Advanced CSS Techniques",
      topics: [
        "CSS Preprocessors (Sass/SCSS)",
        "CSS Frameworks (Bootstrap, Tailwind)",
        "CSS-in-JS and Styled Components",
        "Performance Optimization",
        "Cross-browser Compatibility"
      ]
    },
    {
      title: "Modern Web Design",
      topics: [
        "Mobile-First Design",
        "Progressive Web Apps (PWA)",
        "Accessibility (WCAG Guidelines)",
        "SEO Best Practices",
        "Design Systems and Component Libraries"
      ]
    }
  ];

  const projects = [
    {
      title: "Responsive Portfolio Website",
      description: "Professional portfolio with responsive design, animations, and modern layout techniques.",
      icon: "💼"
    },
    {
      title: "E-Commerce Landing Page",
      description: "Product showcase website with interactive elements, forms, and mobile optimization.",
      icon: "🛍️"
    },
    {
      title: "Restaurant Website",
      description: "Complete restaurant site with menu, gallery, reservations, and location features.",
      icon: "🍽️"
    },
    {
      title: "Corporate Dashboard",
      description: "Business dashboard with data visualization, charts, and responsive admin interface.",
      icon: "📊"
    }
  ];

  const careerPaths = [
    { role: "Frontend Developer", salary: "₹3-8 LPA", companies: "Startups, Agencies, Freelance" },
    { role: "Web Designer", salary: "₹4-9 LPA", companies: "Design Studios, Marketing Agencies" },
    { role: "UI Developer", salary: "₹5-11 LPA", companies: "Tech Companies, Product Teams" },
    { role: "Full Stack Developer", salary: "₹6-14 LPA", companies: "All Tech Companies" }
  ];

  return (
    <div className="htmlcss-course-page">
      <section className="course-hero">
        <div className="container">
          <div className="course-hero-content">
            <div className="course-info">
              <div className="course-icon-large">🌐</div>
              <div className="course-details">
                <h1>Complete HTML & CSS Course</h1>
                <p className="course-description">
                  Master the fundamentals of web development. Learn HTML5, CSS3, responsive design, 
                  and modern web standards to build beautiful, accessible websites.
                </p>
                <div className="course-meta">
                  <div className="meta-item">
                    <span className="meta-icon">⏱️</span>
                    <span>2 Months</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">📊</span>
                    <span>Beginner to Intermediate</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">👨‍🎓</span>
                    <span>4,200+ Students</span>
                  </div>
                  <div className="rating">
                    <span className="meta-icon">⭐</span>
                    <span>4.9/5 (580 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="course-enrollment">
              <div className="price-card">
                <div className="price">₹12,999</div>
                <div className="price-note">One-time payment • Lifetime access</div>
                <a
                  href="https://wa.me/919392963190?text=Hi%2C%20how%20can%20I%20help%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Enroll Now
                </a>
                <button className="btn btn-secondary btn-large">Download Syllabus</button>
                
                <div className="course-features">
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>100% Job Assistance</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>Responsive Design</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>Modern CSS Techniques</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>Portfolio Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="course-content">
        <div className="container">
          <div className="course-tabs">
            <button 
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`tab-btn ${activeTab === 'curriculum' ? 'active' : ''}`}
              onClick={() => setActiveTab('curriculum')}
            >
              Curriculum
            </button>
            <button 
              className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              Projects
            </button>
            <button 
              className={`tab-btn ${activeTab === 'career' ? 'active' : ''}`}
              onClick={() => setActiveTab('career')}
            >
              Career Paths
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'overview' && (
              <div className="overview-content">
                <h2>Why Choose HTML & CSS?</h2>
                <div className="highlights-grid">
                  <div className="highlight-item">
                    <span className="highlight-icon">🏗️</span>
                    <span>Foundation of Web Development</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🎨</span>
                    <span>Creative Design Freedom</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">📱</span>
                    <span>Responsive Web Design</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🚀</span>
                    <span>Quick Learning Curve</span>
                  </div>
                </div>

                <h3>Technologies You'll Master</h3>
                <div className="tools-grid">
                  <span className="tool-item">HTML5</span>
                  <span className="tool-item">CSS3</span>
                  <span className="tool-item">Flexbox</span>
                  <span className="tool-item">CSS Grid</span>
                  <span className="tool-item">Bootstrap</span>
                  <span className="tool-item">Sass/SCSS</span>
                  <span className="tool-item">Responsive Design</span>
                  <span className="tool-item">CSS Animations</span>
                  <span className="tool-item">Web Accessibility</span>
                  <span className="tool-item">SEO Basics</span>
                </div>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div className="curriculum-content">
                <h2>Complete Course Curriculum</h2>
                <div className="curriculum-modules">
                  {courseModules.map((module, index) => (
                    <div key={index} className="module-card">
                      <h3>Module {index + 1}: {module.title}</h3>
                      <ul className="topics-list">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="projects-content">
                <h2>Real-World Projects</h2>
                <div className="projects-grid">
                  {projects.map((project, index) => (
                    <div key={index} className="project-card">
                      <div className="project-icon">{project.icon}</div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'career' && (
              <div className="career-content">
                <h2>Career Opportunities</h2>
                <div className="career-paths">
                  {careerPaths.map((career, index) => (
                    <div key={index} className="career-card">
                      <h3>{career.role}</h3>
                      <div className="salary">{career.salary}</div>
                      <div className="companies">Top Companies: {career.companies}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="course-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Web Development Journey?</h2>
            <p>Begin with the fundamentals and build a strong foundation for your web development career.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">Enroll Now - ₹12,999</button>
              <Link to="/contact" className="btn btn-secondary btn-large">Talk to Counselor</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HTMLCSSCourse;

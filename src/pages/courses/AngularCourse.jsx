import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AngularCourse.css';

const AngularCourse = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const courseModules = [
    {
      title: "Angular Fundamentals",
      topics: [
        "Introduction to Angular and TypeScript",
        "Components and Templates",
        "Data Binding and Directives",
        "Services and Dependency Injection",
        "Routing and Navigation"
      ]
    },
    {
      title: "Advanced Angular Concepts",
      topics: [
        "Forms and Validation",
        "HTTP Client and Observables",
        "State Management with NgRx",
        "Angular Material Design",
        "Testing with Jasmine and Karma"
      ]
    },
    {
      title: "Enterprise Development",
      topics: [
        "Angular CLI and Build Tools",
        "Lazy Loading and Code Splitting",
        "Performance Optimization",
        "Progressive Web Apps (PWA)",
        "Deployment Strategies"
      ]
    },
    {
      title: "Full-Stack Integration",
      topics: [
        "RESTful API Integration",
        "Authentication and Guards",
        "Real-time Communication",
        "Angular Universal (SSR)",
        "Micro-frontends Architecture"
      ]
    }
  ];

  const projects = [
    {
      title: "Enterprise Dashboard",
      description: "Complete admin dashboard with data visualization, user management, and real-time analytics.",
      icon: "📊"
    },
    {
      title: "E-Learning Platform",
      description: "Educational platform with course management, video streaming, and progress tracking.",
      icon: "🎓"
    },
    {
      title: "Banking Application",
      description: "Secure banking interface with transaction management, account overview, and financial tools.",
      icon: "🏦"
    },
    {
      title: "Social Media App",
      description: "Social networking platform with real-time messaging, posts, and user interactions.",
      icon: "📱"
    }
  ];

  const careerPaths = [
    { role: "Angular Developer", salary: "₹6-13 LPA", companies: "Google, Microsoft, IBM" },
    { role: "Frontend Developer", salary: "₹5-12 LPA", companies: "Accenture, TCS, Infosys" },
    { role: "Full Stack Developer", salary: "₹8-16 LPA", companies: "Amazon, Flipkart, Paytm" },
    { role: "UI/UX Developer", salary: "₹7-15 LPA", companies: "Adobe, Figma, Zomato" }
  ];

  return (
    <div className="angular-course-page">
      <section className="course-hero">
        <div className="container">
          <div className="course-hero-content">
            <div className="course-info">
              <div className="course-icon-large">🅰️</div>
              <div className="course-details">
                <h1>Complete Angular Development Course</h1>
                <p className="course-description">
                  Master Angular framework with TypeScript. Build enterprise-grade applications with 
                  modern architecture, state management, and advanced features.
                </p>
                <div className="course-meta">
                  <div className="meta-item">
                    <span className="meta-icon">⏱️</span>
                    <span>4 Months</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">📊</span>
                    <span>Intermediate to Advanced</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">👨‍🎓</span>
                    <span>2,100+ Students</span>
                  </div>
                  <div className="rating">
                    <span className="meta-icon">⭐</span>
                    <span>4.7/5 (340 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="course-enrollment">
              <div className="price-card">
                <div className="price">10% discount</div>
                <div className="price-note">One-time payment • Lifetime access</div>
                <a
                  href="https://wa.me/917659844898?text=Hello%2C%20I%20want%20Angular%20information"
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
                    <span>Enterprise Projects</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>TypeScript Mastery</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>Industry Certificate</span>
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
                <h2>Why Choose Angular Development?</h2>
                <div className="highlights-grid">
                  <div className="highlight-item">
                    <span className="highlight-icon">🏢</span>
                    <span>Enterprise-Grade Framework</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">⚡</span>
                    <span>High Performance Apps</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🔧</span>
                    <span>Complete Development Platform</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">💼</span>
                    <span>High Corporate Demand</span>
                  </div>
                </div>

                <h3>Technologies You'll Master</h3>
                <div className="tools-grid">
                  <span className="tool-item">Angular 17+</span>
                  <span className="tool-item">TypeScript</span>
                  <span className="tool-item">RxJS</span>
                  <span className="tool-item">NgRx</span>
                  <span className="tool-item">Angular Material</span>
                  <span className="tool-item">Angular CLI</span>
                  <span className="tool-item">Jasmine</span>
                  <span className="tool-item">Karma</span>
                  <span className="tool-item">Angular Universal</span>
                  <span className="tool-item">PWA</span>
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
            <h2>Ready to Build Enterprise Angular Applications?</h2>
            <p>Master the most powerful frontend framework used by Fortune 500 companies worldwide.</p>
            <div className="cta-buttons">
              <a
                href="https://wa.me/917659844898?text=Hi%2C%20how%20can%20I%20help%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-large"
              >
                Enroll Now - ₹21,999
              </a>
              <Link to="/contact" className="btn btn-secondary btn-large">Talk to Counselor</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AngularCourse;

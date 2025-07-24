import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './JavaScriptCourse.css';

const JavaScriptCourse = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const courseModules = [
    {
      title: "JavaScript Fundamentals",
      topics: [
        "Variables, Data Types, and Operators",
        "Functions and Scope",
        "Arrays and Objects",
        "Control Structures and Loops",
        "DOM Manipulation"
      ]
    },
    {
      title: "Advanced JavaScript",
      topics: [
        "ES6+ Features and Syntax",
        "Asynchronous Programming",
        "Promises and Async/Await",
        "Closures and Prototypes",
        "Error Handling"
      ]
    },
    {
      title: "Modern JavaScript Development",
      topics: [
        "Module Systems (ES6, CommonJS)",
        "Build Tools (Webpack, Vite)",
        "Package Management with NPM",
        "Testing with Jest",
        "TypeScript Basics"
      ]
    },
    {
      title: "JavaScript Frameworks",
      topics: [
        "Introduction to React",
        "Vue.js Fundamentals",
        "Node.js Backend Development",
        "Express.js Framework",
        "API Development"
      ]
    }
  ];

  const projects = [
    {
      title: "Interactive Web Calculator",
      description: "Advanced calculator with scientific functions, history, and responsive design.",
      icon: "🧮"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with geolocation, forecasts, and interactive maps.",
      icon: "🌤️"
    },
    {
      title: "Task Management System",
      description: "Full-featured todo application with drag-and-drop, categories, and local storage.",
      icon: "📝"
    },
    {
      title: "Quiz Application",
      description: "Interactive quiz platform with timer, scoring, and progress tracking.",
      icon: "🎯"
    }
  ];

  const careerPaths = [
    { role: "JavaScript Developer", salary: "₹4-9 LPA", companies: "Google, Facebook, Netflix" },
    { role: "Frontend Developer", salary: "₹5-11 LPA", companies: "Microsoft, Adobe, Shopify" },
    { role: "Full Stack Developer", salary: "₹7-15 LPA", companies: "Amazon, Uber, Airbnb" },
    { role: "Node.js Developer", salary: "₹6-13 LPA", companies: "LinkedIn, PayPal, Walmart" }
  ];

  return (
    <div className="javascript-course-page">
      <section className="course-hero">
        <div className="container">
          <div className="course-hero-content">
            <div className="course-info">
              <div className="course-icon-large">🟨</div>
              <div className="course-details">
                <h1>Complete JavaScript Development Course</h1>
                <p className="course-description">
                  Master JavaScript from basics to advanced concepts. Learn modern ES6+ features, 
                  asynchronous programming, and build dynamic web applications.
                </p>
                <div className="course-meta">
                  <div className="meta-item">
                    <span className="meta-icon">⏱️</span>
                    <span>3 Months</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">📊</span>
                    <span>Beginner to Advanced</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">👨‍🎓</span>
                    <span>3,500+ Students</span>
                  </div>
                  <div className="rating">
                    <span className="meta-icon">⭐</span>
                    <span>4.7/5 (420 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="course-enrollment">
              <div className="price-card">
                <div className="price">10% discount</div>
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
                    <span>Hands-on Projects</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>Expert Mentorship</span>
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
                <h2>Why Choose JavaScript Development?</h2>
                <div className="highlights-grid">
                  <div className="highlight-item">
                    <span className="highlight-icon">🌐</span>
                    <span>Universal Web Language</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">⚡</span>
                    <span>Dynamic and Interactive</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🚀</span>
                    <span>Fastest Growing Language</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">💼</span>
                    <span>High Job Opportunities</span>
                  </div>
                </div>

                <h3>Technologies You'll Master</h3>
                <div className="tools-grid">
                  <span className="tool-item">JavaScript ES6+</span>
                  <span className="tool-item">DOM Manipulation</span>
                  <span className="tool-item">AJAX & Fetch API</span>
                  <span className="tool-item">JSON</span>
                  <span className="tool-item">Local Storage</span>
                  <span className="tool-item">Webpack</span>
                  <span className="tool-item">NPM</span>
                  <span className="tool-item">Jest Testing</span>
                  <span className="tool-item">TypeScript</span>
                  <span className="tool-item">Node.js</span>
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
            <h2>Ready to Master JavaScript?</h2>
            <p>Start your journey to becoming a professional JavaScript developer today.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">Enroll Now - ₹15,999</button>
              <Link to="/contact" className="btn btn-secondary btn-large">Talk to Counselor</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JavaScriptCourse;

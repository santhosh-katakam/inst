import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NodejsCourse.css';

const NodejsCourse = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const courseModules = [
    {
      title: "Node.js Fundamentals",
      topics: [
        "Introduction to Node.js and NPM",
        "JavaScript Runtime Environment",
        "Modules and File System",
        "Event Loop and Asynchronous Programming",
        "Callbacks, Promises, and Async/Await"
      ]
    },
    {
      title: "Express.js Framework",
      topics: [
        "Setting up Express Server",
        "Routing and Middleware",
        "Request and Response Handling",
        "Template Engines (EJS, Handlebars)",
        "Error Handling and Debugging"
      ]
    },
    {
      title: "Database Integration",
      topics: [
        "MongoDB with Mongoose",
        "MySQL with Sequelize",
        "Database Design and Modeling",
        "CRUD Operations",
        "Database Relationships"
      ]
    },
    {
      title: "Advanced Backend Development",
      topics: [
        "RESTful API Development",
        "Authentication and Authorization",
        "JWT and Session Management",
        "File Upload and Processing",
        "Testing with Jest and Mocha"
      ]
    }
  ];

  const projects = [
    {
      title: "E-Commerce REST API",
      description: "Complete backend API for e-commerce platform with user management, product catalog, and order processing.",
      icon: "🛒"
    },
    {
      title: "Real-time Chat Application",
      description: "Socket.io powered chat application with rooms, private messaging, and file sharing capabilities.",
      icon: "💬"
    },
    {
      title: "Blog Management System",
      description: "Full-featured blog API with user authentication, post management, and comment system.",
      icon: "📝"
    },
    {
      title: "Task Management API",
      description: "Project management backend with team collaboration, task assignment, and progress tracking.",
      icon: "📋"
    }
  ];

  const careerPaths = [
    { role: "Node.js Developer", salary: "₹6-12 LPA", companies: "Netflix, LinkedIn, Uber" },
    { role: "Backend Developer", salary: "₹5-11 LPA", companies: "PayPal, WhatsApp, NASA" },
    { role: "Full Stack Developer", salary: "₹8-16 LPA", companies: "Amazon, Microsoft, IBM" },
    { role: "API Developer", salary: "₹7-14 LPA", companies: "Spotify, Trello, Medium" }
  ];

  return (
    <div className="nodejs-course-page">
      <section className="course-hero">
        <div className="container">
          <div className="course-hero-content">
            <div className="course-info">
              <div className="course-icon-large">🟢</div>
              <div className="course-details">
                <h1>Complete Node.js Development Course</h1>
                <p className="course-description">
                  Master server-side JavaScript with Node.js. Learn to build scalable backend applications, 
                  RESTful APIs, and real-time applications using modern Node.js technologies.
                </p>
                <div className="course-meta">
                  <div className="meta-item">
                    <span className="meta-icon">⏱️</span>
                    <span>3 Months</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">📊</span>
                    <span>Intermediate to Advanced</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">👨‍🎓</span>
                    <span>1,800+ Students</span>
                  </div>
                  <div className="rating">
                    <span className="meta-icon">⭐</span>
                    <span>4.8/5 (290 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="course-enrollment">
              <div className="price-card">
                <div className="price">10% discount</div>
                <div className="price-note">One-time payment • Lifetime access</div>
                <a
                  href="https://wa.me/917659844898?text=Hello%2C%20I%20want%20Node.js%20information"
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
                    <span>Real-time Projects</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>Industry Mentorship</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>API Development</span>
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
                <h2>Why Choose Node.js Development?</h2>
                <div className="highlights-grid">
                  <div className="highlight-item">
                    <span className="highlight-icon">⚡</span>
                    <span>High Performance Backend</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🌐</span>
                    <span>JavaScript Everywhere</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">📈</span>
                    <span>Scalable Applications</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🚀</span>
                    <span>Rapid Development</span>
                  </div>
                </div>

                <h3>Technologies You'll Master</h3>
                <div className="tools-grid">
                  <span className="tool-item">Node.js</span>
                  <span className="tool-item">Express.js</span>
                  <span className="tool-item">MongoDB</span>
                  <span className="tool-item">Mongoose</span>
                  <span className="tool-item">Socket.io</span>
                  <span className="tool-item">JWT</span>
                  <span className="tool-item">Passport.js</span>
                  <span className="tool-item">Multer</span>
                  <span className="tool-item">Jest</span>
                  <span className="tool-item">PM2</span>
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
            <h2>Ready to Build Powerful Backend Applications?</h2>
            <p>Master Node.js and become a sought-after backend developer in the industry.</p>
            <div className="cta-buttons">
              <a
                href="https://wa.me/917659844898?text=Hello%2C%20I%20want%20Node.js%20information"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-large"
              >
                Enroll Now - 10% discount
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NodejsCourse;

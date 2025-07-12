import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PHPCourse.css';

const PHPCourse = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const courseModules = [
    {
      title: "PHP Fundamentals",
      topics: [
        "PHP Syntax and Variables",
        "Control Structures and Functions",
        "Arrays and String Manipulation",
        "File Handling and Sessions",
        "Error Handling and Debugging"
      ]
    },
    {
      title: "Object-Oriented PHP",
      topics: [
        "Classes and Objects",
        "Inheritance and Polymorphism",
        "Interfaces and Abstract Classes",
        "Namespaces and Autoloading",
        "Design Patterns in PHP"
      ]
    },
    {
      title: "Database Integration",
      topics: [
        "MySQL Database Design",
        "PDO and MySQLi",
        "CRUD Operations",
        "Database Security",
        "Query Optimization"
      ]
    },
    {
      title: "Web Development with PHP",
      topics: [
        "Laravel Framework",
        "MVC Architecture",
        "RESTful API Development",
        "Authentication and Security",
        "Deployment and Hosting"
      ]
    }
  ];

  const projects = [
    {
      title: "Content Management System",
      description: "Full-featured CMS with user management, content creation, and admin dashboard.",
      icon: "📝"
    },
    {
      title: "E-Commerce Website",
      description: "Complete online store with product management, shopping cart, and payment gateway.",
      icon: "🛒"
    },
    {
      title: "Social Networking Site",
      description: "Social platform with user profiles, posts, messaging, and friend connections.",
      icon: "👥"
    },
    {
      title: "Inventory Management System",
      description: "Business application for stock management, reporting, and supplier tracking.",
      icon: "📦"
    }
  ];

  const careerPaths = [
    { role: "PHP Developer", salary: "₹4-9 LPA", companies: "WordPress, Drupal, Magento" },
    { role: "Backend Developer", salary: "₹5-11 LPA", companies: "Facebook, Slack, Etsy" },
    { role: "Full Stack Developer", salary: "₹6-13 LPA", companies: "Laravel, Symfony, Zend" },
    { role: "Web Developer", salary: "₹4-10 LPA", companies: "Yahoo, Flickr, Tumblr" }
  ];

  return (
    <div className="php-course-page">
      <section className="course-hero">
        <div className="container">
          <div className="course-hero-content">
            <div className="course-info">
              <div className="course-icon-large">🐘</div>
              <div className="course-details">
                <h1>Complete PHP Development Course</h1>
                <p className="course-description">
                  Master PHP programming and web development. Learn to build dynamic websites, 
                  web applications, and APIs using modern PHP frameworks and best practices.
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
                    <span>2,600+ Students</span>
                  </div>
                  <div className="rating">
                    <span className="meta-icon">⭐</span>
                    <span>4.6/5 (410 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="course-enrollment">
              <div className="price-card">
                <div className="price">₹16,999</div>
                <div className="price-note">One-time payment • Lifetime access</div>
                <button className="btn btn-primary btn-large">Enroll Now</button>
                <button className="btn btn-secondary btn-large">Download Syllabus</button>
                
                <div className="course-features">
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>100% Job Assistance</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>Live Web Projects</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>Laravel Framework</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>Database Integration</span>
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
                <h2>Why Choose PHP Development?</h2>
                <div className="highlights-grid">
                  <div className="highlight-item">
                    <span className="highlight-icon">🌐</span>
                    <span>Powers 80% of Web</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">💰</span>
                    <span>Cost-Effective Development</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🚀</span>
                    <span>Rapid Development</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">📈</span>
                    <span>High Job Demand</span>
                  </div>
                </div>

                <h3>Technologies You'll Master</h3>
                <div className="tools-grid">
                  <span className="tool-item">PHP 8+</span>
                  <span className="tool-item">Laravel</span>
                  <span className="tool-item">MySQL</span>
                  <span className="tool-item">Composer</span>
                  <span className="tool-item">PHPUnit</span>
                  <span className="tool-item">Apache</span>
                  <span className="tool-item">Nginx</span>
                  <span className="tool-item">Git</span>
                  <span className="tool-item">REST APIs</span>
                  <span className="tool-item">WordPress</span>
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
            <h2>Ready to Build Dynamic Web Applications?</h2>
            <p>Master PHP and join millions of developers building the web with this powerful language.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">Enroll Now - ₹16,999</button>
              <Link to="/contact" className="btn btn-secondary btn-large">Talk to Counselor</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PHPCourse;

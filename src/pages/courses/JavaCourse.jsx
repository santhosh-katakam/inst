import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './JavaCourse.css';

const JavaCourse = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const courseModules = [
    {
      title: "Java Fundamentals",
      topics: [
        "Introduction to Java and JVM",
        "Variables, Data Types, and Operators",
        "Control Structures (if-else, loops)",
        "Methods and Parameter Passing",
        "Arrays and String Manipulation"
      ]
    },
    {
      title: "Object-Oriented Programming",
      topics: [
        "Classes and Objects",
        "Inheritance and Polymorphism",
        "Encapsulation and Abstraction",
        "Interfaces and Abstract Classes",
        "Exception Handling"
      ]
    },
    {
      title: "Advanced Java Concepts",
      topics: [
        "Collections Framework",
        "Generics and Lambda Expressions",
        "File I/O and Serialization",
        "Multithreading and Concurrency",
        "JDBC Database Connectivity"
      ]
    },
    {
      title: "Java Frameworks",
      topics: [
        "Spring Framework Basics",
        "Spring Boot Development",
        "Hibernate ORM",
        "RESTful Web Services",
        "Maven Build Tool"
      ]
    }
  ];

  const projects = [
    {
      title: "Banking Management System",
      description: "Complete banking application with account management, transactions, and reporting features.",
      icon: "🏦"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured online shopping platform with user authentication, product catalog, and payment integration.",
      icon: "🛒"
    },
    {
      title: "Library Management System",
      description: "Digital library system with book inventory, member management, and borrowing tracking.",
      icon: "📚"
    },
    {
      title: "Employee Management Portal",
      description: "HR management system with employee records, payroll, and performance tracking.",
      icon: "👥"
    }
  ];

  const careerPaths = [
    { role: "Java Developer", salary: "₹4-8 LPA", companies: "TCS, Infosys, Wipro" },
    { role: "Backend Developer", salary: "₹6-12 LPA", companies: "Amazon, Flipkart, Paytm" },
    { role: "Full Stack Developer", salary: "₹8-15 LPA", companies: "Google, Microsoft, Oracle" },
    { role: "Software Architect", salary: "₹15-25 LPA", companies: "IBM, Accenture, Cognizant" }
  ];

  return (
    <div className="java-course-page">
      {/* Course Hero Section */}
      <section className="course-hero">
        <div className="container">
          <div className="course-hero-content">
            <div className="course-info">
              <div className="course-icon-large">☕</div>
              <div className="course-details">
                <h1>Complete Java Development Course</h1>
                <p className="course-description">
                  Master Java programming from basics to advanced concepts. Learn object-oriented programming, 
                  frameworks like Spring Boot, and build real-world applications that employers demand.
                </p>
                <div className="course-meta">
                  <div className="meta-item">
                    <span className="meta-icon">⏱️</span>
                    <span>6 Months</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">📊</span>
                    <span>Beginner to Advanced</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">👨‍🎓</span>
                    <span>2,500+ Students</span>
                  </div>
                  <div className="rating">
                    <span className="meta-icon">⭐</span>
                    <span>4.8/5 (450 reviews)</span>
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
                    <span>Industry Projects</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>Expert Mentorship</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>Certificate of Completion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content Tabs */}
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
                <h2>Why Choose Java Development?</h2>
                <div className="highlights-grid">
                  <div className="highlight-item">
                    <span className="highlight-icon">🚀</span>
                    <span>High Demand Language</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">💰</span>
                    <span>Excellent Salary Packages</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🌐</span>
                    <span>Platform Independent</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🏢</span>
                    <span>Enterprise Applications</span>
                  </div>
                </div>

                <h3>Technologies You'll Master</h3>
                <div className="tools-grid">
                  <span className="tool-item">Core Java</span>
                  <span className="tool-item">Spring Framework</span>
                  <span className="tool-item">Spring Boot</span>
                  <span className="tool-item">Hibernate</span>
                  <span className="tool-item">MySQL</span>
                  <span className="tool-item">Maven</span>
                  <span className="tool-item">Git</span>
                  <span className="tool-item">REST APIs</span>
                  <span className="tool-item">JUnit Testing</span>
                  <span className="tool-item">Eclipse/IntelliJ</span>
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

      {/* CTA Section */}
      <section className="course-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Java Journey?</h2>
            <p>Join thousands of successful developers who started their career with our Java course.</p>
            <div className="cta-buttons">
              <a
                href="https://wa.me/919392963190?text=Hi%2C%20how%20can%20I%20help%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Enroll Now - ₹25,999
              </a>
              <Link to="/contact" className="btn btn-secondary btn-large">Talk to Counselor</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JavaCourse;

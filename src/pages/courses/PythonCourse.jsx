import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PythonCourse.css';

const PythonCourse = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const courseModules = [
    {
      title: "Python Fundamentals",
      topics: [
        "Python Syntax and Variables",
        "Data Types and Operators",
        "Control Flow and Loops",
        "Functions and Modules",
        "File Handling and Exception Handling"
      ]
    },
    {
      title: "Data Structures & Algorithms",
      topics: [
        "Lists, Tuples, and Dictionaries",
        "Sets and String Manipulation",
        "Object-Oriented Programming",
        "Inheritance and Polymorphism",
        "Algorithm Design and Analysis"
      ]
    },
    {
      title: "Web Development with Python",
      topics: [
        "Django Framework",
        "Flask Web Framework",
        "REST API Development",
        "Database Integration",
        "Authentication and Security"
      ]
    },
    {
      title: "Data Science & Machine Learning",
      topics: [
        "NumPy and Pandas",
        "Data Visualization with Matplotlib",
        "Machine Learning with Scikit-learn",
        "Deep Learning Basics",
        "Data Analysis Projects"
      ]
    }
  ];

  const projects = [
    {
      title: "E-Commerce Web Application",
      description: "Full-stack e-commerce platform built with Django, featuring user authentication, product management, and payment integration.",
      icon: "🛍️"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for data visualization and analysis using Python, Pandas, and Plotly.",
      icon: "📊"
    },
    {
      title: "Machine Learning Predictor",
      description: "ML model for price prediction using regression algorithms and real-world datasets.",
      icon: "🤖"
    },
    {
      title: "Social Media API",
      description: "RESTful API for social media platform with user management, posts, and real-time features.",
      icon: "📱"
    }
  ];

  const careerPaths = [
    { role: "Python Developer", salary: "₹5-10 LPA", companies: "Google, Netflix, Instagram" },
    { role: "Data Scientist", salary: "₹8-18 LPA", companies: "Amazon, Microsoft, Uber" },
    { role: "Machine Learning Engineer", salary: "₹10-20 LPA", companies: "Tesla, OpenAI, Meta" },
    { role: "Backend Developer", salary: "₹6-14 LPA", companies: "Spotify, Dropbox, Reddit" }
  ];

  return (
    <div className="python-course-page">
      {/* Course Hero Section */}
      <section className="course-hero">
        <div className="container">
          <div className="course-hero-content">
            <div className="course-info">
              <div className="course-icon-large">🐍</div>
              <div className="course-details">
                <h1>Complete Python Development Course</h1>
                <p className="course-description">
                  Master Python programming from basics to advanced applications. Learn web development, 
                  data science, machine learning, and build industry-ready projects with Python.
                </p>
                <div className="course-meta">
                  <div className="meta-item">
                    <span className="meta-icon">⏱️</span>
                    <span>5 Months</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">📊</span>
                    <span>Beginner to Expert</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">👨‍🎓</span>
                    <span>3,200+ Students</span>
                  </div>
                  <div className="rating">
                    <span className="meta-icon">⭐</span>
                    <span>4.9/5 (520 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="course-enrollment">
              <div className="price-card">
                <div className="price">₹22,999</div>
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
                    <span>100% Job Guarantee</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>Live Projects</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>Industry Mentors</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>Portfolio Development</span>
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
                <h2>Why Choose Python Development?</h2>
                <div className="highlights-grid">
                  <div className="highlight-item">
                    <span className="highlight-icon">🚀</span>
                    <span>Fastest Growing Language</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">💡</span>
                    <span>Easy to Learn & Use</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🌟</span>
                    <span>Versatile Applications</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">📈</span>
                    <span>High Market Demand</span>
                  </div>
                </div>

                <h3>Technologies You'll Master</h3>
                <div className="tools-grid">
                  <span className="tool-item">Python 3.x</span>
                  <span className="tool-item">Django</span>
                  <span className="tool-item">Flask</span>
                  <span className="tool-item">NumPy</span>
                  <span className="tool-item">Pandas</span>
                  <span className="tool-item">Matplotlib</span>
                  <span className="tool-item">Scikit-learn</span>
                  <span className="tool-item">TensorFlow</span>
                  <span className="tool-item">PostgreSQL</span>
                  <span className="tool-item">Git & GitHub</span>
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
            <h2>Ready to Master Python Programming?</h2>
            <p>Join the most popular programming language course and unlock endless career opportunities.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">Enroll Now - ₹22,999</button>
              <Link to="/contact" className="btn btn-secondary btn-large">Talk to Counselor</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PythonCourse;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UIUXCourse.css';

const UIUXCourse = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const courseModules = [
    {
      title: "Design Fundamentals",
      topics: [
        "Introduction to UI/UX Design",
        "Design Thinking Process",
        "Color Theory and Typography",
        "Layout and Composition",
        "User Psychology and Behavior"
      ]
    },
    {
      title: "User Experience (UX) Design",
      topics: [
        "User Research and Personas",
        "Information Architecture",
        "User Journey Mapping",
        "Wireframing and Prototyping",
        "Usability Testing Methods"
      ]
    },
    {
      title: "User Interface (UI) Design",
      topics: [
        "Visual Design Principles",
        "Design Systems and Style Guides",
        "Responsive Design Patterns",
        "Micro-interactions and Animations",
        "Accessibility and Inclusive Design"
      ]
    },
    {
      title: "Design Tools and Portfolio",
      topics: [
        "Figma Advanced Techniques",
        "Adobe XD and Sketch",
        "Prototyping with InVision",
        "Portfolio Development",
        "Client Presentation Skills"
      ]
    }
  ];

  const projects = [
    {
      title: "Mobile Banking App",
      description: "Complete UX/UI design for a secure and user-friendly mobile banking application.",
      icon: "💳"
    },
    {
      title: "E-Commerce Website",
      description: "End-to-end design of an online shopping platform with optimal user experience.",
      icon: "🛍️"
    },
    {
      title: "Healthcare Dashboard",
      description: "Medical dashboard design for doctors and patients with complex data visualization.",
      icon: "🏥"
    },
    {
      title: "Social Media Platform",
      description: "Modern social networking app design with engaging user interface and interactions.",
      icon: "📱"
    }
  ];

  const careerPaths = [
    { role: "UI/UX Designer", salary: "₹4-10 LPA", companies: "Google, Apple, Microsoft" },
    { role: "Product Designer", salary: "₹6-15 LPA", companies: "Airbnb, Uber, Netflix" },
    { role: "Design Lead", salary: "₹10-20 LPA", companies: "Meta, Adobe, Figma" },
    { role: "UX Researcher", salary: "₹8-18 LPA", companies: "Amazon, Spotify, Dropbox" }
  ];

  return (
    <div className="uiux-course-page">
      <section className="course-hero">
        <div className="container">
          <div className="course-hero-content">
            <div className="course-info">
              <div className="course-icon-large">🎨</div>
              <div className="course-details">
                <h1>Complete UI/UX Design Course</h1>
                <p className="course-description">
                  Master User Interface and User Experience design. Learn to create beautiful, 
                  functional designs that users love using industry-standard tools and methodologies.
                </p>
                <div className="course-meta">
                  <div className="meta-item">
                    <span className="meta-icon">⏱️</span>
                    <span>4 Months</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">📊</span>
                    <span>Beginner to Advanced</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">👨‍🎓</span>
                    <span>1,500+ Students</span>
                  </div>
                  <div className="rating">
                    <span className="meta-icon">⭐</span>
                    <span>4.8/5 (220 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="course-enrollment">
              <div className="price-card">
                <div className="price">10% discount</div>
                <div className="price-note">One-time payment • Lifetime access</div>
                <a
                  href="https://wa.me/917659844898?text=Hello%2C%20I%20want%20UI/UX%20Design%20information"
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
                    <span>Portfolio Development</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>Industry Tools Training</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>Design Mentorship</span>
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
                <h2>Why Choose UI/UX Design?</h2>
                <div className="highlights-grid">
                  <div className="highlight-item">
                    <span className="highlight-icon">🎯</span>
                    <span>High Demand Career</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">💡</span>
                    <span>Creative Problem Solving</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🌍</span>
                    <span>Remote Work Opportunities</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">📈</span>
                    <span>Growing Industry</span>
                  </div>
                </div>

                <h3>Design Tools You'll Master</h3>
                <div className="tools-grid">
                  <span className="tool-item">Figma</span>
                  <span className="tool-item">Adobe XD</span>
                  <span className="tool-item">Sketch</span>
                  <span className="tool-item">InVision</span>
                  <span className="tool-item">Photoshop</span>
                  <span className="tool-item">Illustrator</span>
                  <span className="tool-item">Principle</span>
                  <span className="tool-item">Framer</span>
                  <span className="tool-item">Miro</span>
                  <span className="tool-item">Zeplin</span>
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
            <h2>Ready to Design Amazing User Experiences?</h2>
            <p>Create beautiful, user-centered designs that make a real impact on millions of users.</p>
            <div className="cta-buttons">
              <a
                href="https://wa.me/917659844898?text=Hello%2C%20I%20want%20UI%2FUX%20information"
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

export default UIUXCourse;

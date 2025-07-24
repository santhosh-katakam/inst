import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ReactNativeCourse.css';

const ReactNativeCourse = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const courseModules = [
    {
      title: "React Native Fundamentals",
      topics: [
        "Introduction to React Native",
        "Setting up Development Environment",
        "React Native Components and JSX",
        "Navigation with React Navigation",
        "State Management with Hooks"
      ]
    },
    {
      title: "Advanced React Native",
      topics: [
        "Native Modules and Bridges",
        "AsyncStorage and Data Persistence",
        "API Integration and Networking",
        "Push Notifications",
        "Camera and Media Access"
      ]
    },
    {
      title: "Performance and Optimization",
      topics: [
        "Performance Optimization Techniques",
        "Memory Management",
        "Code Splitting and Lazy Loading",
        "Testing with Jest and Detox",
        "Debugging and Profiling"
      ]
    },
    {
      title: "Deployment and Publishing",
      topics: [
        "Building for Production",
        "App Store and Play Store Publishing",
        "Code Push and Over-the-Air Updates",
        "CI/CD for React Native",
        "Monitoring and Analytics"
      ]
    }
  ];

  const projects = [
    {
      title: "Cross-Platform Social App",
      description: "Social networking app with posts, messaging, and real-time features for iOS and Android.",
      icon: "👥"
    },
    {
      title: "Food Delivery App",
      description: "Complete food ordering app with restaurant listings, cart, payment, and order tracking.",
      icon: "🍕"
    },
    {
      title: "Expense Tracker App",
      description: "Personal finance app with expense tracking, budgeting, and financial analytics.",
      icon: "💰"
    },
    {
      title: "Music Streaming App",
      description: "Spotify-like music app with playlists, offline playback, and social sharing features.",
      icon: "🎵"
    }
  ];

  const careerPaths = [
    { role: "React Native Developer", salary: "₹5-13 LPA", companies: "Facebook, Instagram, Airbnb" },
    { role: "Mobile App Developer", salary: "₹6-15 LPA", companies: "Uber, WhatsApp, Discord" },
    { role: "Cross-Platform Developer", salary: "₹7-16 LPA", companies: "Startups, Tech Companies" },
    { role: "Senior RN Developer", salary: "₹10-22 LPA", companies: "MNCs, Product Companies" }
  ];

  return (
    <div className="reactnative-course-page">
      <section className="course-hero">
        <div className="container">
          <div className="course-hero-content">
            <div className="course-info">
              <div className="course-icon-large">⚛️</div>
              <div className="course-details">
                <h1>Complete React Native Course</h1>
                <p className="course-description">
                  Master cross-platform mobile development with React Native. Build native iOS and Android 
                  apps using JavaScript and React, with code reusability and native performance.
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
                    <span>1,700+ Students</span>
                  </div>
                  <div className="rating">
                    <span className="meta-icon">⭐</span>
                    <span>4.7/5 (280 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="course-enrollment">
              <div className="price-card">
                <div className="price">₹23,999</div>
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
                    <span>Cross-Platform Apps</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>Facebook's Framework</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>Native Performance</span>
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
                <h2>Why Choose React Native?</h2>
                <div className="highlights-grid">
                  <div className="highlight-item">
                    <span className="highlight-icon">📱</span>
                    <span>Write Once, Run Everywhere</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">⚡</span>
                    <span>Native Performance</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🔄</span>
                    <span>Hot Reload Development</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🏢</span>
                    <span>Used by Top Companies</span>
                  </div>
                </div>

                <h3>Technologies You'll Master</h3>
                <div className="tools-grid">
                  <span className="tool-item">React Native</span>
                  <span className="tool-item">JavaScript</span>
                  <span className="tool-item">TypeScript</span>
                  <span className="tool-item">React Navigation</span>
                  <span className="tool-item">Redux</span>
                  <span className="tool-item">Firebase</span>
                  <span className="tool-item">Expo</span>
                  <span className="tool-item">AsyncStorage</span>
                  <span className="tool-item">REST APIs</span>
                  <span className="tool-item">Native Modules</span>
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
            <h2>Ready to Build Cross-Platform Native Apps?</h2>
            <p>Master React Native and create powerful mobile apps used by billions worldwide.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">Enroll Now - ₹23,999</button>
              <Link to="/contact" className="btn btn-secondary btn-large">Talk to Counselor</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReactNativeCourse;

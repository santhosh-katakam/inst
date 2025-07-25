import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FlutterCourse.css';

const FlutterCourse = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const courseModules = [
    {
      title: "Flutter Fundamentals",
      topics: [
        "Introduction to Flutter and Dart",
        "Setting up Development Environment",
        "Widgets and UI Components",
        "Layouts and Styling",
        "State Management Basics"
      ]
    },
    {
      title: "Advanced Flutter Development",
      topics: [
        "Navigation and Routing",
        "HTTP Requests and APIs",
        "Local Storage and Databases",
        "State Management (Provider, Bloc)",
        "Custom Widgets and Animations"
      ]
    },
    {
      title: "Native Features Integration",
      topics: [
        "Camera and Gallery Access",
        "GPS and Location Services",
        "Push Notifications",
        "Device Hardware Integration",
        "Platform-specific Code"
      ]
    },
    {
      title: "App Publishing and Optimization",
      topics: [
        "App Store and Play Store Publishing",
        "Performance Optimization",
        "Testing and Debugging",
        "CI/CD for Flutter Apps",
        "Monetization Strategies"
      ]
    }
  ];

  const projects = [
    {
      title: "Cross-Platform E-Commerce App",
      description: "Complete shopping app for both iOS and Android with payment integration and user management.",
      icon: "🛒"
    },
    {
      title: "Social Media App",
      description: "Instagram-like social platform with photo sharing, stories, and real-time messaging.",
      icon: "📸"
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather app with location services, forecasts, and interactive maps.",
      icon: "🌤️"
    },
    {
      title: "Task Management App",
      description: "Productivity app with task tracking, reminders, and team collaboration features.",
      icon: "✅"
    }
  ];

  const careerPaths = [
    { role: "Flutter Developer", salary: "₹5-12 LPA", companies: "Google, Alibaba, BMW" },
    { role: "Mobile App Developer", salary: "₹6-14 LPA", companies: "Uber, Airbnb, Tencent" },
    { role: "Cross-Platform Developer", salary: "₹7-16 LPA", companies: "Startups, Tech Companies" },
    { role: "Senior Flutter Developer", salary: "₹10-20 LPA", companies: "MNCs, Product Companies" }
  ];

  return (
    <div className="flutter-course-page">
      <section className="course-hero">
        <div className="container">
          <div className="course-hero-content">
            <div className="course-info">
              <div className="course-icon-large">🦋</div>
              <div className="course-details">
                <h1>Complete Flutter Development Course</h1>
                <p className="course-description">
                  Master cross-platform mobile development with Flutter and Dart. Build beautiful, 
                  high-performance apps for iOS and Android from a single codebase.
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
                    <span>1,600+ Students</span>
                  </div>
                  <div className="rating">
                    <span className="meta-icon">⭐</span>
                    <span>4.7/5 (250 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="course-enrollment">
              <div className="price-card">
                <div className="price">10% discount</div>
                <div className="price-note">One-time payment • Lifetime access</div>
                <a
                  href="https://wa.me/917659844898?text=Hello%2C%20I%20want%20Flutter%20information"
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
                    <span>Google's Framework</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>App Store Publishing</span>
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
                <h2>Why Choose Flutter Development?</h2>
                <div className="highlights-grid">
                  <div className="highlight-item">
                    <span className="highlight-icon">📱</span>
                    <span>One Code, Two Platforms</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">⚡</span>
                    <span>Fast Development</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🎨</span>
                    <span>Beautiful UI Components</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🚀</span>
                    <span>Growing Demand</span>
                  </div>
                </div>

                <h3>Technologies You'll Master</h3>
                <div className="tools-grid">
                  <span className="tool-item">Flutter</span>
                  <span className="tool-item">Dart</span>
                  <span className="tool-item">Firebase</span>
                  <span className="tool-item">Provider</span>
                  <span className="tool-item">Bloc</span>
                  <span className="tool-item">SQLite</span>
                  <span className="tool-item">REST APIs</span>
                  <span className="tool-item">Git</span>
                  <span className="tool-item">Android Studio</span>
                  <span className="tool-item">VS Code</span>
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
            <h2>Ready to Build Cross-Platform Mobile Apps?</h2>
            <p>Master Flutter and create stunning apps for millions of users on both iOS and Android.</p>
            <div className="cta-buttons">
              <a
                href="https://wa.me/917659844898?text=Hello%2C%20I%20want%20Flutter%20information"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Enroll Now - 10% discount
              </a>
              <Link to="/contact" className="btn btn-secondary btn-large">Talk to Counselor</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlutterCourse;

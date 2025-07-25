import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './iOSCourse.css';

const iOSCourse = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const courseModules = [
    {
      title: "iOS Development Fundamentals",
      topics: [
        "Introduction to iOS Development",
        "Xcode and iOS SDK Setup",
        "Swift Programming Language",
        "UIKit and Interface Builder",
        "Auto Layout and Constraints"
      ]
    },
    {
      title: "Advanced iOS Development",
      topics: [
        "Navigation Controllers and Storyboards",
        "Table Views and Collection Views",
        "Core Data and Data Persistence",
        "Networking with URLSession",
        "Push Notifications and Background Tasks"
      ]
    },
    {
      title: "Modern iOS Architecture",
      topics: [
        "SwiftUI Framework",
        "MVVM and Clean Architecture",
        "Combine Framework",
        "Core Animation and Custom Views",
        "Testing with XCTest"
      ]
    },
    {
      title: "App Store Publishing",
      topics: [
        "App Store Connect and Provisioning",
        "App Review Guidelines",
        "Performance Optimization",
        "Security and Privacy",
        "Monetization and In-App Purchases"
      ]
    }
  ];

  const projects = [
    {
      title: "Social Media iOS App",
      description: "Instagram-like app with photo sharing, stories, messaging, and social features.",
      icon: "📱"
    },
    {
      title: "E-Commerce Shopping App",
      description: "Complete shopping app with product catalog, cart, payment integration, and user accounts.",
      icon: "🛍️"
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather app with location services, forecasts, and interactive animations.",
      icon: "🌤️"
    },
    {
      title: "Fitness Tracking App",
      description: "Health and fitness app with workout tracking, HealthKit integration, and progress analytics.",
      icon: "💪"
    }
  ];

  const careerPaths = [
    { role: "iOS Developer", salary: "₹6-15 LPA", companies: "Apple, Uber, Airbnb" },
    { role: "Mobile App Developer", salary: "₹7-16 LPA", companies: "Netflix, Spotify, Instagram" },
    { role: "Senior iOS Developer", salary: "₹12-25 LPA", companies: "Google, Microsoft, Meta" },
    { role: "iOS Architect", salary: "₹15-30 LPA", companies: "Tech Startups, MNCs" }
  ];

  return (
    <div className="ios-course-page">
      <section className="course-hero">
        <div className="container">
          <div className="course-hero-content">
            <div className="course-info">
              <div className="course-icon-large">🍎</div>
              <div className="course-details">
                <h1>Complete iOS Development Course</h1>
                <p className="course-description">
                  Master iOS app development with Swift and SwiftUI. Build professional iPhone and iPad 
                  applications with modern architecture and publish to the App Store.
                </p>
                <div className="course-meta">
                  <div className="meta-item">
                    <span className="meta-icon">⏱️</span>
                    <span>5 Months</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">📊</span>
                    <span>Beginner to Advanced</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">👨‍🎓</span>
                    <span>1,400+ Students</span>
                  </div>
                  <div className="rating">
                    <span className="meta-icon">⭐</span>
                    <span>4.8/5 (210 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="course-enrollment">
              <div className="price-card">
                <div className="price">10% discount</div>
                <div className="price-note">One-time payment • Lifetime access</div>
                <a
                  href="https://wa.me/917659844898?text=Hi%2C%20how%20can%20I%20help%3F"
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
                    <span>App Store Publishing</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>SwiftUI Mastery</span>
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
                <h2>Why Choose iOS Development?</h2>
                <div className="highlights-grid">
                  <div className="highlight-item">
                    <span className="highlight-icon">💰</span>
                    <span>Highest Revenue Platform</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🏆</span>
                    <span>Premium User Base</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🚀</span>
                    <span>Latest Technology Stack</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🌍</span>
                    <span>Global Market Reach</span>
                  </div>
                </div>

                <h3>Technologies You'll Master</h3>
                <div className="tools-grid">
                  <span className="tool-item">Swift</span>
                  <span className="tool-item">SwiftUI</span>
                  <span className="tool-item">UIKit</span>
                  <span className="tool-item">Xcode</span>
                  <span className="tool-item">Core Data</span>
                  <span className="tool-item">Combine</span>
                  <span className="tool-item">CloudKit</span>
                  <span className="tool-item">HealthKit</span>
                  <span className="tool-item">ARKit</span>
                  <span className="tool-item">App Store Connect</span>
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
            <h2>Ready to Build Premium iOS Apps?</h2>
            <p>Join the elite iOS developer community and create apps for millions of iPhone users worldwide.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">Enroll Now - ₹28,999</button>
              <Link to="/contact" className="btn btn-secondary btn-large">Talk to Counselor</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default iOSCourse;

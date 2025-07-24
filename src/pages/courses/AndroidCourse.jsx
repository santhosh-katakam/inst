import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AndroidCourse.css';

const AndroidCourse = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const courseModules = [
    {
      title: "Android Fundamentals",
      topics: [
        "Introduction to Android Development",
        "Android Studio and SDK Setup",
        "Activities and Fragments",
        "Layouts and UI Components",
        "Intent and Navigation"
      ]
    },
    {
      title: "Advanced Android Development",
      topics: [
        "RecyclerView and Adapters",
        "Database with Room and SQLite",
        "Networking with Retrofit",
        "Background Tasks and Services",
        "Push Notifications"
      ]
    },
    {
      title: "Modern Android Architecture",
      topics: [
        "MVVM Architecture Pattern",
        "LiveData and ViewModel",
        "Data Binding and View Binding",
        "Dependency Injection with Dagger",
        "Jetpack Compose UI"
      ]
    },
    {
      title: "App Publishing and Optimization",
      topics: [
        "Google Play Store Publishing",
        "App Performance Optimization",
        "Security Best Practices",
        "Testing and Debugging",
        "Monetization Strategies"
      ]
    }
  ];

  const projects = [
    {
      title: "E-Commerce Shopping App",
      description: "Complete shopping app with product catalog, cart, payment integration, and user authentication.",
      icon: "🛒"
    },
    {
      title: "Social Media App",
      description: "Social networking app with posts, comments, real-time chat, and photo sharing features.",
      icon: "📱"
    },
    {
      title: "Food Delivery App",
      description: "Restaurant discovery and food ordering app with GPS tracking and payment gateway.",
      icon: "🍕"
    },
    {
      title: "Fitness Tracker App",
      description: "Health and fitness app with workout tracking, calorie counter, and progress analytics.",
      icon: "💪"
    }
  ];

  const careerPaths = [
    { role: "Android Developer", salary: "₹4-12 LPA", companies: "Google, Samsung, Flipkart" },
    { role: "Mobile App Developer", salary: "₹5-14 LPA", companies: "Uber, Swiggy, Paytm" },
    { role: "Senior Android Developer", salary: "₹8-20 LPA", companies: "Amazon, Microsoft, Adobe" },
    { role: "Mobile Architect", salary: "₹12-25 LPA", companies: "Tech Startups, MNCs" }
  ];

  return (
    <div className="android-course-page">
      <section className="course-hero">
        <div className="container">
          <div className="course-hero-content">
            <div className="course-info">
              <div className="course-icon-large">🤖</div>
              <div className="course-details">
                <h1>Complete Android Development Course</h1>
                <p className="course-description">
                  Master Android app development with Kotlin and Java. Build professional mobile applications 
                  with modern architecture, database integration, and Google Play Store publishing.
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
                    <span>Live Mobile Projects</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>Play Store Publishing</span>
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
                <h2>Why Choose Android Development?</h2>
                <div className="highlights-grid">
                  <div className="highlight-item">
                    <span className="highlight-icon">📱</span>
                    <span>3+ Billion Android Users</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">💰</span>
                    <span>High Earning Potential</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🚀</span>
                    <span>Growing Mobile Market</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🏢</span>
                    <span>Corporate Demand</span>
                  </div>
                </div>

                <h3>Technologies You'll Master</h3>
                <div className="tools-grid">
                  <span className="tool-item">Kotlin</span>
                  <span className="tool-item">Java</span>
                  <span className="tool-item">Android Studio</span>
                  <span className="tool-item">Jetpack Compose</span>
                  <span className="tool-item">Room Database</span>
                  <span className="tool-item">Retrofit</span>
                  <span className="tool-item">Firebase</span>
                  <span className="tool-item">MVVM</span>
                  <span className="tool-item">Material Design</span>
                  <span className="tool-item">Google Play Console</span>
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
            <h2>Ready to Build Amazing Android Apps?</h2>
            <p>Join millions of Android developers and create apps used by billions worldwide.</p>
            <div className="cta-buttons">
              <a
                href="https://wa.me/919392963190?text=Hi%2C%20how%20can%20I%20help%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-large"
              >
                Enroll Now - ₹24,999
              </a>
              <Link to="/contact" className="btn btn-secondary btn-large">Talk to Counselor</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AndroidCourse;

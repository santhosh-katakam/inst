import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ReactCourse.css';

const ReactCourse = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const courseModules = [
    {
      title: "React Fundamentals",
      topics: [
        "Introduction to React and JSX",
        "Components and Props",
        "State and Event Handling",
        "Conditional Rendering",
        "Lists and Keys"
      ]
    },
    {
      title: "Advanced React Concepts",
      topics: [
        "React Hooks (useState, useEffect)",
        "Context API and State Management",
        "React Router for Navigation",
        "Form Handling and Validation",
        "Performance Optimization"
      ]
    },
    {
      title: "Modern React Development",
      topics: [
        "Redux for State Management",
        "API Integration with Axios",
        "Testing with Jest and React Testing Library",
        "TypeScript with React",
        "Next.js Framework"
      ]
    },
    {
      title: "Full-Stack Development",
      topics: [
        "Node.js and Express Backend",
        "MongoDB Database Integration",
        "Authentication and Authorization",
        "Deployment and DevOps",
        "Real-time Applications with Socket.io"
      ]
    }
  ];

  const projects = [
    {
      title: "Social Media Dashboard",
      description: "Complete social media platform with user profiles, posts, comments, and real-time notifications.",
      icon: "📱"
    },
    {
      title: "E-Learning Platform",
      description: "Online learning management system with course creation, video streaming, and progress tracking.",
      icon: "🎓"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with drag-and-drop functionality and team collaboration.",
      icon: "📋"
    },
    {
      title: "E-Commerce Store",
      description: "Full-featured online store with product catalog, shopping cart, and payment integration.",
      icon: "🛒"
    }
  ];

  const careerPaths = [
    { role: "React Developer", salary: "₹6-12 LPA", companies: "Facebook, Netflix, Airbnb" },
    { role: "Frontend Developer", salary: "₹5-10 LPA", companies: "Google, Microsoft, Adobe" },
    { role: "Full Stack Developer", salary: "₹8-16 LPA", companies: "Amazon, Uber, Spotify" },
    { role: "UI/UX Developer", salary: "₹7-14 LPA", companies: "Apple, Tesla, Figma" }
  ];

  return (
    <div className="react-course-page">
      {/* Course Hero Section */}
      <section className="course-hero">
        <div className="container">
          <div className="course-hero-content">
            <div className="course-info">
              <div className="course-icon-large">⚛️</div>
              <div className="course-details">
                <h1>Complete React.js Development Course</h1>
                <p className="course-description">
                  Master modern React development from basics to advanced concepts. Learn component-based 
                  architecture, state management, and build dynamic web applications that scale.
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
                    <span>2,800+ Students</span>
                  </div>
                  <div className="rating">
                    <span className="meta-icon">⭐</span>
                    <span>4.8/5 (380 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="course-enrollment">
              <div className="price-card">
                <div className="price">10% discount</div>
                <div className="price-note">One-time payment • Lifetime access</div>
                <a
                  href="https://wa.me/917659844898?text=Hello%2C%20I%20want%20React%20information"
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
                    <span>Live Projects</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>Industry Mentorship</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>Portfolio Building</span>
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
                <h2>Why Choose React Development?</h2>
                <div className="highlights-grid">
                  <div className="highlight-item">
                    <span className="highlight-icon">🚀</span>
                    <span>Most Popular Frontend Library</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">⚡</span>
                    <span>High Performance Applications</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🔧</span>
                    <span>Component-Based Architecture</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">💼</span>
                    <span>High Demand in Industry</span>
                  </div>
                </div>

                <h3>Technologies You'll Master</h3>
                <div className="tools-grid">
                  <span className="tool-item">React.js</span>
                  <span className="tool-item">JSX</span>
                  <span className="tool-item">Redux</span>
                  <span className="tool-item">React Router</span>
                  <span className="tool-item">Next.js</span>
                  <span className="tool-item">TypeScript</span>
                  <span className="tool-item">Material-UI</span>
                  <span className="tool-item">Styled Components</span>
                  <span className="tool-item">Jest Testing</span>
                  <span className="tool-item">Webpack</span>
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
            <h2>Ready to Build Amazing React Applications?</h2>
            <p>Join thousands of developers who have mastered React and landed their dream jobs.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">Enroll Now - ₹19,999</button>
              <Link to="/contact" className="btn btn-secondary btn-large">Talk to Counselor</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReactCourse;

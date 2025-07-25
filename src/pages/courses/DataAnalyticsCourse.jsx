import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DataAnalyticsCourse.css';

const DataAnalyticsCourse = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const courseModules = [
    {
      title: "Analytics Fundamentals",
      topics: [
        "Introduction to Data Analytics",
        "Business Intelligence Concepts",
        "Excel Advanced Functions",
        "SQL for Data Analysis",
        "Statistical Analysis Basics"
      ]
    },
    {
      title: "Data Visualization",
      topics: [
        "Tableau Desktop Mastery",
        "Power BI Development",
        "Dashboard Design Principles",
        "Interactive Visualizations",
        "Storytelling with Data"
      ]
    },
    {
      title: "Advanced Analytics",
      topics: [
        "Python for Analytics",
        "R Programming for Statistics",
        "Predictive Analytics",
        "A/B Testing and Experimentation",
        "Customer Segmentation"
      ]
    },
    {
      title: "Business Analytics",
      topics: [
        "KPI Development and Tracking",
        "Financial Analytics",
        "Marketing Analytics",
        "Operations Analytics",
        "Reporting and Presentation"
      ]
    }
  ];

  const projects = [
    {
      title: "Sales Performance Dashboard",
      description: "Interactive dashboard tracking sales metrics, trends, and performance across regions and products.",
      icon: "📊"
    },
    {
      title: "Customer Behavior Analysis",
      description: "Comprehensive analysis of customer journey, preferences, and purchasing patterns.",
      icon: "👥"
    },
    {
      title: "Marketing Campaign Analytics",
      description: "ROI analysis and optimization of digital marketing campaigns across multiple channels.",
      icon: "📈"
    },
    {
      title: "Financial Risk Assessment",
      description: "Risk modeling and analysis for financial portfolios and investment decisions.",
      icon: "💰"
    }
  ];

  const careerPaths = [
    { role: "Data Analyst", salary: "₹4-10 LPA", companies: "Accenture, Deloitte, EY" },
    { role: "Business Analyst", salary: "₹5-12 LPA", companies: "McKinsey, BCG, Bain" },
    { role: "Marketing Analyst", salary: "₹6-14 LPA", companies: "Google, Facebook, Amazon" },
    { role: "Financial Analyst", salary: "₹7-16 LPA", companies: "Goldman Sachs, JP Morgan" }
  ];

  return (
    <div className="dataanalytics-course-page">
      <section className="course-hero">
        <div className="container">
          <div className="course-hero-content">
            <div className="course-info">
              <div className="course-icon-large">📈</div>
              <div className="course-details">
                <h1>Complete Data Analytics Course</h1>
                <p className="course-description">
                  Master data analytics and business intelligence. Learn to analyze data, create insights, 
                  and build powerful dashboards that drive business decisions.
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
                    <span>1,900+ Students</span>
                  </div>
                  <div className="rating">
                    <span className="meta-icon">⭐</span>
                    <span>4.8/5 (270 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="course-enrollment">
              <div className="price-card">
                <div className="price">10% discount</div>
                <div className="price-note">One-time payment • Lifetime access</div>
                <a
                  href="https://wa.me/917659844898?text=Hello%2C%20I%20want%20Data%20Analytics%20information"
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
                    <span>Tableau & Power BI</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>Business Projects</span>
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
                <h2>Why Choose Data Analytics?</h2>
                <div className="highlights-grid">
                  <div className="highlight-item">
                    <span className="highlight-icon">📊</span>
                    <span>High Demand Skill</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">💼</span>
                    <span>Every Industry Needs</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🎯</span>
                    <span>Data-Driven Decisions</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">📈</span>
                    <span>Career Growth</span>
                  </div>
                </div>

                <h3>Tools You'll Master</h3>
                <div className="tools-grid">
                  <span className="tool-item">Excel</span>
                  <span className="tool-item">SQL</span>
                  <span className="tool-item">Tableau</span>
                  <span className="tool-item">Power BI</span>
                  <span className="tool-item">Python</span>
                  <span className="tool-item">R</span>
                  <span className="tool-item">Google Analytics</span>
                  <span className="tool-item">SPSS</span>
                  <span className="tool-item">Looker</span>
                  <span className="tool-item">Qlik Sense</span>
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
            <h2>Ready to Become a Data Analytics Expert?</h2>
            <p>Turn data into actionable insights and drive business growth with analytics expertise.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">Enroll Now - ₹18,999</button>
              <Link to="/contact" className="btn btn-secondary btn-large">Talk to Counselor</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataAnalyticsCourse;

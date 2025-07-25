import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DataScienceCourse.css';

const DataScienceCourse = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const courseModules = [
    {
      title: "Data Science Fundamentals",
      topics: [
        "Introduction to Data Science",
        "Statistics and Probability",
        "Python for Data Science",
        "Data Collection and Web Scraping",
        "Data Cleaning and Preprocessing"
      ]
    },
    {
      title: "Data Analysis and Visualization",
      topics: [
        "Exploratory Data Analysis (EDA)",
        "Pandas and NumPy Mastery",
        "Data Visualization with Matplotlib",
        "Advanced Plotting with Seaborn",
        "Interactive Dashboards with Plotly"
      ]
    },
    {
      title: "Machine Learning for Data Science",
      topics: [
        "Supervised Learning Algorithms",
        "Unsupervised Learning Techniques",
        "Feature Engineering and Selection",
        "Model Evaluation and Validation",
        "Ensemble Methods and Boosting"
      ]
    },
    {
      title: "Advanced Data Science",
      topics: [
        "Big Data with Apache Spark",
        "Time Series Analysis",
        "Natural Language Processing",
        "Deep Learning for Data Science",
        "MLOps and Model Deployment"
      ]
    }
  ];

  const projects = [
    {
      title: "Customer Analytics Platform",
      description: "Complete customer behavior analysis with segmentation, churn prediction, and lifetime value modeling.",
      icon: "👥"
    },
    {
      title: "Financial Market Predictor",
      description: "Stock price prediction system using time series analysis and machine learning algorithms.",
      icon: "📈"
    },
    {
      title: "Healthcare Data Analysis",
      description: "Medical data analysis for disease prediction, treatment optimization, and patient outcome analysis.",
      icon: "🏥"
    },
    {
      title: "Recommendation Engine",
      description: "Netflix-style recommendation system using collaborative filtering and content-based algorithms.",
      icon: "🎯"
    }
  ];

  const careerPaths = [
    { role: "Data Scientist", salary: "₹8-20 LPA", companies: "Google, Amazon, Microsoft" },
    { role: "Data Analyst", salary: "₹6-15 LPA", companies: "Netflix, Uber, Airbnb" },
    { role: "Business Intelligence Analyst", salary: "₹7-16 LPA", companies: "McKinsey, Deloitte, PwC" },
    { role: "Research Scientist", salary: "₹12-25 LPA", companies: "Meta, Apple, Tesla" }
  ];

  return (
    <div className="datascience-course-page">
      <section className="course-hero">
        <div className="container">
          <div className="course-hero-content">
            <div className="course-info">
              <div className="course-icon-large">📊</div>
              <div className="course-details">
                <h1>Complete Data Science Course</h1>
                <p className="course-description">
                  Master the complete Data Science pipeline from data collection to insights. Learn statistics, 
                  machine learning, and advanced analytics to solve real-world business problems.
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
                    <span>2,200+ Students</span>
                  </div>
                  <div className="rating">
                    <span className="meta-icon">⭐</span>
                    <span>4.9/5 (320 reviews)</span>
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
                    <span>Real Business Projects</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>Industry Mentorship</span>
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
                <h2>Why Choose Data Science?</h2>
                <div className="highlights-grid">
                  <div className="highlight-item">
                    <span className="highlight-icon">🚀</span>
                    <span>Fastest Growing Field</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">💰</span>
                    <span>Highest Paying Jobs</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🌍</span>
                    <span>Global Opportunities</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🧠</span>
                    <span>Solve Complex Problems</span>
                  </div>
                </div>

                <h3>Technologies You'll Master</h3>
                <div className="tools-grid">
                  <span className="tool-item">Python</span>
                  <span className="tool-item">R Programming</span>
                  <span className="tool-item">SQL</span>
                  <span className="tool-item">Pandas</span>
                  <span className="tool-item">NumPy</span>
                  <span className="tool-item">Scikit-learn</span>
                  <span className="tool-item">TensorFlow</span>
                  <span className="tool-item">Tableau</span>
                  <span className="tool-item">Apache Spark</span>
                  <span className="tool-item">AWS/Azure</span>
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
            <h2>Ready to Become a Data Science Expert?</h2>
            <p>Transform raw data into valuable insights and drive business decisions with data science.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">Enroll Now - ₹32,999</button>
              <Link to="/contact" className="btn btn-secondary btn-large">Talk to Counselor</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataScienceCourse;

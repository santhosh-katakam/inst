import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MachineLearningCourse.css';

const MachineLearningCourse = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const courseModules = [
    {
      title: "Machine Learning Fundamentals",
      topics: [
        "Introduction to AI and ML",
        "Types of Machine Learning",
        "Python for Data Science",
        "NumPy and Pandas Basics",
        "Data Preprocessing Techniques"
      ]
    },
    {
      title: "Supervised Learning",
      topics: [
        "Linear and Logistic Regression",
        "Decision Trees and Random Forest",
        "Support Vector Machines",
        "K-Nearest Neighbors",
        "Model Evaluation Metrics"
      ]
    },
    {
      title: "Unsupervised Learning & Deep Learning",
      topics: [
        "K-Means and Hierarchical Clustering",
        "Principal Component Analysis",
        "Neural Networks Fundamentals",
        "TensorFlow and Keras",
        "Convolutional Neural Networks"
      ]
    },
    {
      title: "Advanced ML & Deployment",
      topics: [
        "Natural Language Processing",
        "Computer Vision Applications",
        "Model Deployment with Flask",
        "Cloud ML Services (AWS/Azure)",
        "MLOps and Production Systems"
      ]
    }
  ];

  const projects = [
    {
      title: "Predictive Analytics System",
      description: "Build ML models for sales forecasting, customer behavior prediction, and business analytics.",
      icon: "📊"
    },
    {
      title: "Image Recognition App",
      description: "Computer vision application for object detection, facial recognition, and image classification.",
      icon: "👁️"
    },
    {
      title: "Chatbot with NLP",
      description: "Intelligent chatbot using natural language processing for customer service automation.",
      icon: "🤖"
    },
    {
      title: "Recommendation Engine",
      description: "Netflix-style recommendation system for movies, products, and content personalization.",
      icon: "🎯"
    }
  ];

  const careerPaths = [
    { role: "ML Engineer", salary: "₹8-18 LPA", companies: "Google, Microsoft, Amazon" },
    { role: "Data Scientist", salary: "₹10-22 LPA", companies: "Netflix, Uber, Airbnb" },
    { role: "AI Research Scientist", salary: "₹15-30 LPA", companies: "OpenAI, DeepMind, Meta" },
    { role: "ML Consultant", salary: "₹12-25 LPA", companies: "Accenture, Deloitte, McKinsey" }
  ];

  return (
    <div className="ml-course-page">
      <section className="course-hero">
        <div className="container">
          <div className="course-hero-content">
            <div className="course-info">
              <div className="course-icon-large">🧠</div>
              <div className="course-details">
                <h1>Complete Machine Learning Course</h1>
                <p className="course-description">
                  Master Machine Learning and AI with Python. Learn to build intelligent systems, 
                  predictive models, and deploy ML applications in real-world scenarios.
                </p>
                <div className="course-meta">
                  <div className="meta-item">
                    <span className="meta-icon">⏱️</span>
                    <span>6 Months</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">📊</span>
                    <span>Intermediate to Advanced</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">👨‍🎓</span>
                    <span>1,200+ Students</span>
                  </div>
                  <div className="rating">
                    <span className="meta-icon">⭐</span>
                    <span>4.9/5 (180 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="course-enrollment">
              <div className="price-card">
                <div className="price">₹35,999</div>
                <div className="price-note">One-time payment • Lifetime access</div>
                <button className="btn btn-primary btn-large">Enroll Now</button>
                <button className="btn btn-secondary btn-large">Download Syllabus</button>
                
                <div className="course-features">
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>100% Job Assistance</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>AI/ML Projects</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>Industry Mentorship</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>Cloud Deployment</span>
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
                <h2>Why Choose Machine Learning?</h2>
                <div className="highlights-grid">
                  <div className="highlight-item">
                    <span className="highlight-icon">🚀</span>
                    <span>Future of Technology</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">💰</span>
                    <span>Highest Paying Tech Jobs</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🌍</span>
                    <span>Global Job Opportunities</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🧠</span>
                    <span>Solve Real-World Problems</span>
                  </div>
                </div>

                <h3>Technologies You'll Master</h3>
                <div className="tools-grid">
                  <span className="tool-item">Python</span>
                  <span className="tool-item">TensorFlow</span>
                  <span className="tool-item">Keras</span>
                  <span className="tool-item">Scikit-learn</span>
                  <span className="tool-item">Pandas</span>
                  <span className="tool-item">NumPy</span>
                  <span className="tool-item">Matplotlib</span>
                  <span className="tool-item">Jupyter</span>
                  <span className="tool-item">AWS ML</span>
                  <span className="tool-item">Docker</span>
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
            <h2>Ready to Build Intelligent Systems?</h2>
            <p>Join the AI revolution and become a Machine Learning expert with high-demand skills.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">Enroll Now - ₹35,999</button>
              <Link to="/contact" className="btn btn-secondary btn-large">Talk to Counselor</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MachineLearningCourse;

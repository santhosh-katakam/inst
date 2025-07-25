import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AICourse.css';

const AICourse = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const courseModules = [
    {
      title: "AI Fundamentals",
      topics: [
        "Introduction to Artificial Intelligence",
        "History and Evolution of AI",
        "Types of AI Systems",
        "Python Programming for AI",
        "Mathematics for AI"
      ]
    },
    {
      title: "Machine Learning for AI",
      topics: [
        "Supervised and Unsupervised Learning",
        "Neural Networks Basics",
        "Deep Learning Fundamentals",
        "Computer Vision with OpenCV",
        "Natural Language Processing"
      ]
    },
    {
      title: "Advanced AI Technologies",
      topics: [
        "Generative AI and LLMs",
        "Reinforcement Learning",
        "AI Ethics and Bias",
        "AI in Robotics",
        "Edge AI and IoT"
      ]
    },
    {
      title: "AI Applications & Deployment",
      topics: [
        "AI in Healthcare and Finance",
        "Chatbots and Virtual Assistants",
        "AI Model Deployment",
        "Cloud AI Services",
        "Future of AI Technology"
      ]
    }
  ];

  const projects = [
    {
      title: "Intelligent Chatbot",
      description: "AI-powered conversational agent with natural language understanding and context awareness.",
      icon: "🤖"
    },
    {
      title: "Computer Vision System",
      description: "Image recognition and object detection system for real-world applications.",
      icon: "👁️"
    },
    {
      title: "Predictive AI Model",
      description: "Advanced prediction system for business forecasting and decision making.",
      icon: "🔮"
    },
    {
      title: "AI Content Generator",
      description: "Generative AI system for creating text, images, and multimedia content.",
      icon: "✨"
    }
  ];

  const careerPaths = [
    { role: "AI Engineer", salary: "₹10-25 LPA", companies: "OpenAI, Google, Microsoft" },
    { role: "AI Research Scientist", salary: "₹15-35 LPA", companies: "DeepMind, Meta, Apple" },
    { role: "AI Product Manager", salary: "₹12-28 LPA", companies: "Amazon, Tesla, Nvidia" },
    { role: "AI Consultant", salary: "₹14-30 LPA", companies: "McKinsey, BCG, Accenture" }
  ];

  return (
    <div className="ai-course-page">
      <section className="course-hero">
        <div className="container">
          <div className="course-hero-content">
            <div className="course-info">
              <div className="course-icon-large">🤖</div>
              <div className="course-details">
                <h1>Complete Artificial Intelligence Course</h1>
                <p className="course-description">
                  Master Artificial Intelligence and build the future. Learn AI fundamentals, machine learning, 
                  deep learning, and cutting-edge AI technologies that are transforming industries.
                </p>
                <div className="course-meta">
                  <div className="meta-item">
                    <span className="meta-icon">⏱️</span>
                    <span>8 Months</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">📊</span>
                    <span>Advanced Level</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">👨‍🎓</span>
                    <span>800+ Students</span>
                  </div>
                  <div className="rating">
                    <span className="meta-icon">⭐</span>
                    <span>4.9/5 (120 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="course-enrollment">
              <div className="price-card">
                <div className="price">10% discount</div>
                <div className="price-note">One-time payment • Lifetime access</div>
                <a
                  href="https://wa.me/917659844898?text=Hello%2C%20I%20want%20AI%20information"
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
                    <span>Cutting-Edge AI Tech</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>Research Projects</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>Industry Mentorship</span>
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
                <h2>Why Choose Artificial Intelligence?</h2>
                <div className="highlights-grid">
                  <div className="highlight-item">
                    <span className="highlight-icon">🚀</span>
                    <span>Future Technology</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">💰</span>
                    <span>Highest Salaries</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🌍</span>
                    <span>Transform Industries</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🧠</span>
                    <span>Limitless Innovation</span>
                  </div>
                </div>

                <h3>AI Technologies You'll Master</h3>
                <div className="tools-grid">
                  <span className="tool-item">Python</span>
                  <span className="tool-item">TensorFlow</span>
                  <span className="tool-item">PyTorch</span>
                  <span className="tool-item">OpenAI GPT</span>
                  <span className="tool-item">Hugging Face</span>
                  <span className="tool-item">OpenCV</span>
                  <span className="tool-item">NLTK</span>
                  <span className="tool-item">Keras</span>
                  <span className="tool-item">AWS AI</span>
                  <span className="tool-item">Google AI</span>
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
            <h2>Ready to Shape the Future with AI?</h2>
            <p>Master Artificial Intelligence and become part of the most revolutionary technology of our time.</p>
            <div className="cta-buttons">
              <a
                href="https://wa.me/917659844898?text=Hi%2C%20how%20can%20I%20help%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-large"
              >
                Enroll Now - ₹45,999
              </a>
              <Link to="/contact" className="btn btn-secondary btn-large">Talk to Counselor</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICourse;

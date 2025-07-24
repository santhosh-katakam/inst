import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './GraphicDesignCourse.css';

const GraphicDesignCourse = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const courseModules = [
    {
      title: "Design Fundamentals",
      topics: [
        "Introduction to Graphic Design",
        "Design Principles and Elements",
        "Color Theory and Psychology",
        "Typography and Font Selection",
        "Layout and Composition"
      ]
    },
    {
      title: "Adobe Creative Suite",
      topics: [
        "Adobe Photoshop Mastery",
        "Adobe Illustrator Advanced",
        "Adobe InDesign for Layouts",
        "Adobe After Effects Basics",
        "Creative Cloud Integration"
      ]
    },
    {
      title: "Brand Identity Design",
      topics: [
        "Logo Design Process",
        "Brand Guidelines Creation",
        "Corporate Identity Systems",
        "Packaging Design",
        "Marketing Collateral Design"
      ]
    },
    {
      title: "Digital and Print Design",
      topics: [
        "Web Graphics and UI Elements",
        "Social Media Design",
        "Print Design and Prepress",
        "Portfolio Development",
        "Client Presentation Skills"
      ]
    }
  ];

  const projects = [
    {
      title: "Complete Brand Identity",
      description: "Design comprehensive brand identity including logo, business cards, letterheads, and brand guidelines.",
      icon: "🎨"
    },
    {
      title: "Magazine Layout Design",
      description: "Create professional magazine layouts with typography, images, and editorial design principles.",
      icon: "📖"
    },
    {
      title: "Social Media Campaign",
      description: "Design cohesive social media graphics for Instagram, Facebook, and LinkedIn campaigns.",
      icon: "📱"
    },
    {
      title: "Product Packaging Design",
      description: "Create attractive and functional packaging design for consumer products.",
      icon: "📦"
    }
  ];

  const careerPaths = [
    { role: "Graphic Designer", salary: "₹3-8 LPA", companies: "Design Studios, Agencies" },
    { role: "Brand Designer", salary: "₹5-12 LPA", companies: "Ogilvy, Leo Burnett, Wieden+Kennedy" },
    { role: "Creative Director", salary: "₹8-18 LPA", companies: "Advertising Agencies, Startups" },
    { role: "Freelance Designer", salary: "₹4-15 LPA", companies: "Independent, Global Clients" }
  ];

  return (
    <div className="graphicdesign-course-page">
      <section className="course-hero">
        <div className="container">
          <div className="course-hero-content">
            <div className="course-info">
              <div className="course-icon-large">🎨</div>
              <div className="course-details">
                <h1>Complete Graphic Design Course</h1>
                <p className="course-description">
                  Master visual communication and creative design. Learn Adobe Creative Suite, brand identity, 
                  and create stunning graphics for print and digital media.
                </p>
                <div className="course-meta">
                  <div className="meta-item">
                    <span className="meta-icon">⏱️</span>
                    <span>3 Months</span>
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
                    <span>4.7/5 (380 reviews)</span>
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
                    <span>Adobe Suite Mastery</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>Portfolio Development</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✅</span>
                    <span>Industry Projects</span>
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
                <h2>Why Choose Graphic Design?</h2>
                <div className="highlights-grid">
                  <div className="highlight-item">
                    <span className="highlight-icon">🎨</span>
                    <span>Creative Expression</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">💼</span>
                    <span>Versatile Career Options</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🌍</span>
                    <span>Global Opportunities</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">📈</span>
                    <span>Growing Digital Market</span>
                  </div>
                </div>

                <h3>Design Tools You'll Master</h3>
                <div className="tools-grid">
                  <span className="tool-item">Adobe Photoshop</span>
                  <span className="tool-item">Adobe Illustrator</span>
                  <span className="tool-item">Adobe InDesign</span>
                  <span className="tool-item">Adobe After Effects</span>
                  <span className="tool-item">Figma</span>
                  <span className="tool-item">Canva Pro</span>
                  <span className="tool-item">CorelDRAW</span>
                  <span className="tool-item">Sketch</span>
                  <span className="tool-item">Procreate</span>
                  <span className="tool-item">Adobe XD</span>
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
            <h2>Ready to Create Stunning Visual Designs?</h2>
            <p>Master graphic design and bring your creative vision to life with professional design skills.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">Enroll Now - ₹16,999</button>
              <Link to="/contact" className="btn btn-secondary btn-large">Talk to Counselor</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesignCourse;

import { useParams } from 'react-router-dom'
import { useState } from 'react'
import './CoursePage.css'

const CoursePage = () => {
  const { category } = useParams()
  const [activeTab, setActiveTab] = useState('overview')

  // Mock course data - in real app, this would come from an API
  const courseData = {
    'python': {
      name: 'Python Certification Course',
      icon: '🐍',
      duration: '4 months',
      level: 'Beginner to Advanced',
      price: '₹25,000',
      rating: 4.8,
      students: 1250,
      description: 'Master Python programming from basics to advanced concepts including Django, Flask, and data science libraries.',
      highlights: [
        'Comprehensive Python fundamentals',
        'Web development with Django & Flask',
        'Data science libraries (NumPy, Pandas, Matplotlib)',
        'Database integration',
        'API development',
        'Real-world projects'
      ],
      curriculum: [
        {
          module: 'Python Basics',
          topics: ['Variables & Data Types', 'Control Structures', 'Functions', 'File Handling']
        },
        {
          module: 'Object-Oriented Programming',
          topics: ['Classes & Objects', 'Inheritance', 'Polymorphism', 'Encapsulation']
        },
        {
          module: 'Web Development',
          topics: ['Django Framework', 'Flask Framework', 'REST APIs', 'Database Integration']
        },
        {
          module: 'Data Science',
          topics: ['NumPy', 'Pandas', 'Matplotlib', 'Data Analysis Projects']
        }
      ],
      prerequisites: [
        'Basic computer knowledge',
        'No prior programming experience required',
        'Willingness to learn and practice'
      ],
      tools: ['Python 3.x', 'PyCharm/VS Code', 'Django', 'Flask', 'Git', 'PostgreSQL'],
      projects: [
        'E-commerce Website with Django',
        'Data Analysis Dashboard',
        'REST API Development',
        'Web Scraping Application'
      ]
    },
    'java': {
      name: 'Java Development Course',
      icon: '☕',
      duration: '5 months',
      level: 'Beginner to Advanced',
      price: '₹30,000',
      rating: 4.7,
      students: 980,
      description: 'Complete Java programming course covering Core Java, Spring Framework, and enterprise application development.',
      highlights: [
        'Core Java fundamentals',
        'Spring Framework & Spring Boot',
        'Hibernate ORM',
        'Microservices architecture',
        'Enterprise application development',
        'Industry best practices'
      ],
      curriculum: [
        {
          module: 'Core Java',
          topics: ['OOP Concepts', 'Collections Framework', 'Exception Handling', 'Multithreading']
        },
        {
          module: 'Advanced Java',
          topics: ['JDBC', 'Servlets', 'JSP', 'Spring Framework']
        },
        {
          module: 'Spring Boot',
          topics: ['Auto Configuration', 'REST APIs', 'Data JPA', 'Security']
        },
        {
          module: 'Enterprise Development',
          topics: ['Microservices', 'Testing', 'Deployment', 'Best Practices']
        }
      ],
      prerequisites: [
        'Basic programming knowledge helpful',
        'Understanding of databases',
        'Logical thinking ability'
      ],
      tools: ['Java JDK', 'Eclipse/IntelliJ IDEA', 'Spring Boot', 'Maven', 'MySQL', 'Git'],
      projects: [
        'Banking Management System',
        'E-learning Platform',
        'Microservices Application',
        'RESTful Web Services'
      ]
    }
  }

  const course = courseData[category] || courseData['python']

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`star ${i < Math.floor(rating) ? 'filled' : ''}`}>★</span>
    ))
  }

  return (
    <div className="course-page">
      <div className="course-hero">
        <div className="container">
          <div className="course-hero-content">
            <div className="course-info">
              <div className="course-icon-large">{course.icon}</div>
              <div className="course-details">
                <h1>{course.name}</h1>
                <p className="course-description">{course.description}</p>
                
                <div className="course-meta">
                  <div className="meta-item">
                    <span className="meta-icon">📅</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">📊</span>
                    <span>{course.level}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">👥</span>
                    <span>{course.students} students</span>
                  </div>
                  <div className="meta-item">
                    <div className="rating">
                      {renderStars(course.rating)}
                      <span>({course.rating})</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="course-enrollment">
              <div className="price-card">
                <div className="price">{course.price}</div>
                <div className="price-note">One-time payment</div>
                <a
                  href="https://wa.me/917659844898?text=Hi%2C%20how%20can%20I%20help%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Enroll Now
                </a>
                <button className="btn btn-secondary btn-large">Download Brochure</button>
                
                <div className="course-features">
                  <div className="feature">
                    <span className="feature-icon">🎓</span>
                    <span>Certificate on completion</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">💼</span>
                    <span>100% Placement assistance</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">🔄</span>
                    <span>Lifetime access to materials</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
              className={`tab-btn ${activeTab === 'requirements' ? 'active' : ''}`}
              onClick={() => setActiveTab('requirements')}
            >
              Requirements
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'overview' && (
              <div className="overview-content">
                <h2>Course Highlights</h2>
                <div className="highlights-grid">
                  {course.highlights.map((highlight, index) => (
                    <div key={index} className="highlight-item">
                      <span className="highlight-icon">✓</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <h2>Tools & Technologies</h2>
                <div className="tools-grid">
                  {course.tools.map((tool, index) => (
                    <div key={index} className="tool-item">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div className="curriculum-content">
                <h2>Course Curriculum</h2>
                <div className="curriculum-modules">
                  {course.curriculum.map((module, index) => (
                    <div key={index} className="module-card">
                      <h3>Module {index + 1}: {module.module}</h3>
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
                  {course.projects.map((project, index) => (
                    <div key={index} className="project-card">
                      <div className="project-icon">🚀</div>
                      <h3>Project {index + 1}</h3>
                      <p>{project}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'requirements' && (
              <div className="requirements-content">
                <h2>Prerequisites</h2>
                <div className="requirements-list">
                  {course.prerequisites.map((req, index) => (
                    <div key={index} className="requirement-item">
                      <span className="req-icon">📋</span>
                      <span>{req}</span>
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
            <h2>Ready to Start Your Journey?</h2>
            <p>Join thousands of students who have successfully completed this course</p>
            <div className="cta-buttons">
              <a
                href="https://wa.me/917659844898?text=Hi%2C%20how%20can%20I%20help%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CoursePage

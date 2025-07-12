import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Courses.css'

const Courses = () => {
  const [activeTab, setActiveTab] = useState('classroom')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const courseCategories = [
    {
      id: 'software-development',
      name: 'Software Development',
      icon: '💻',
      description: 'Learn programming languages and frameworks to build modern applications'
    },
    {
      id: 'mobile-development',
      name: 'Mobile Development',
      icon: '📱',
      description: 'Create mobile apps for Android and iOS platforms'
    },
    {
      id: 'data-science',
      name: 'Data Science & AI',
      icon: '🤖',
      description: 'Master data analysis, machine learning, and artificial intelligence'
    },
    {
      id: 'design',
      name: 'Design',
      icon: '🎨',
      description: 'Learn web design, UI/UX, and graphic design skills'
    },
    {
      id: 'testing',
      name: 'Software Testing',
      icon: '🧪',
      description: 'Ensure software quality through manual and automated testing'
    },
    {
      id: 'digital-marketing',
      name: 'Digital Marketing',
      icon: '📢',
      description: 'Master online marketing strategies and SEO techniques'
    }
  ]

  const allCourses = [
    // Software Development
    { 
      id: 'python', 
      name: 'Python Certification Course', 
      category: 'software-development',
      icon: '🐍', 
      duration: '4 months', 
      level: 'Beginner to Advanced',
      price: '₹25,000',
      rating: 4.8,
      students: 1250,
      description: 'Master Python programming from basics to advanced concepts including Django, Flask, and data science libraries.'
    },
    { 
      id: 'java', 
      name: 'Java Development Course', 
      category: 'software-development',
      icon: '☕', 
      duration: '5 months', 
      level: 'Beginner to Advanced',
      price: '₹30,000',
      rating: 4.7,
      students: 980,
      description: 'Complete Java programming course covering Core Java, Spring Framework, and enterprise application development.'
    },
    { 
      id: 'react', 
      name: 'React Development Course', 
      category: 'software-development',
      icon: '⚛️', 
      duration: '3 months', 
      level: 'Intermediate',
      price: '₹22,000',
      rating: 4.9,
      students: 750,
      description: 'Build modern web applications using React, Redux, and related technologies.'
    },
    { 
      id: 'php', 
      name: 'PHP & MySQL Course', 
      category: 'software-development',
      icon: '🐘', 
      duration: '3 months', 
      level: 'Beginner to Intermediate',
      price: '₹18,000',
      rating: 4.6,
      students: 890,
      description: 'Learn server-side programming with PHP and database management with MySQL.'
    },
    
    // Mobile Development
    { 
      id: 'android', 
      name: 'Android Development', 
      category: 'mobile-development',
      icon: '🤖', 
      duration: '4 months', 
      level: 'Beginner to Advanced',
      price: '₹28,000',
      rating: 4.8,
      students: 650,
      description: 'Create native Android applications using Java/Kotlin and Android Studio.'
    },
    { 
      id: 'ios', 
      name: 'iOS Development', 
      category: 'mobile-development',
      icon: '🍎', 
      duration: '4 months', 
      level: 'Beginner to Advanced',
      price: '₹32,000',
      rating: 4.7,
      students: 420,
      description: 'Build iOS applications using Swift and Xcode development environment.'
    },
    { 
      id: 'flutter', 
      name: 'Flutter Development', 
      category: 'mobile-development',
      icon: '🦋', 
      duration: '3 months', 
      level: 'Intermediate',
      price: '₹26,000',
      rating: 4.8,
      students: 380,
      description: 'Develop cross-platform mobile apps using Google\'s Flutter framework.'
    },
    
    // Data Science
    { 
      id: 'data-science', 
      name: 'Data Science Course', 
      category: 'data-science',
      icon: '📊', 
      duration: '6 months', 
      level: 'Intermediate to Advanced',
      price: '₹45,000',
      rating: 4.9,
      students: 520,
      description: 'Complete data science program covering Python, R, machine learning, and data visualization.'
    },
    { 
      id: 'machine-learning', 
      name: 'Machine Learning Course', 
      category: 'data-science',
      icon: '🧠', 
      duration: '4 months', 
      level: 'Advanced',
      price: '₹38,000',
      rating: 4.8,
      students: 340,
      description: 'Deep dive into machine learning algorithms, neural networks, and AI applications.'
    },
    
    // Design
    { 
      id: 'ui-ux', 
      name: 'UI/UX Design Course', 
      category: 'design',
      icon: '🎨', 
      duration: '4 months', 
      level: 'Beginner to Advanced',
      price: '₹24,000',
      rating: 4.7,
      students: 680,
      description: 'Learn user interface and user experience design principles and tools.'
    },
    { 
      id: 'web-design', 
      name: 'Web Design Course', 
      category: 'design',
      icon: '🌐', 
      duration: '3 months', 
      level: 'Beginner',
      price: '₹16,000',
      rating: 4.6,
      students: 920,
      description: 'Master HTML, CSS, JavaScript, and responsive web design techniques.'
    },
    
    // Testing
    { 
      id: 'software-testing', 
      name: 'Software Testing Course', 
      category: 'testing',
      icon: '🧪', 
      duration: '3 months', 
      level: 'Beginner to Intermediate',
      price: '₹20,000',
      rating: 4.5,
      students: 560,
      description: 'Learn manual and automated testing techniques for software quality assurance.'
    },
    
    // Digital Marketing
    { 
      id: 'digital-marketing', 
      name: 'Digital Marketing Course', 
      category: 'digital-marketing',
      icon: '📢', 
      duration: '3 months', 
      level: 'Beginner to Advanced',
      price: '₹22,000',
      rating: 4.7,
      students: 780,
      description: 'Master SEO, SEM, social media marketing, and digital advertising strategies.'
    }
  ]

  const getFilteredCourses = () => {
    if (selectedCategory === 'all') {
      return allCourses
    }
    return allCourses.filter(course => course.category === selectedCategory)
  }

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`star ${i < Math.floor(rating) ? 'filled' : ''}`}>★</span>
    ))
  }

  return (
    <div className="courses-page">
      <div className="courses-hero">
        <div className="container">
          <div className="courses-hero-content">
            <h1>Our Courses</h1>
            <p>Choose from 50+ industry-relevant courses designed to boost your career</p>
            
            <div className="course-tabs">
              <button 
                className={`tab-btn ${activeTab === 'classroom' ? 'active' : ''}`}
                onClick={() => setActiveTab('classroom')}
              >
                Classroom Training
              </button>
              <button 
                className={`tab-btn ${activeTab === 'online' ? 'active' : ''}`}
                onClick={() => setActiveTab('online')}
              >
                Online Training
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="courses-categories">
        <div className="container">
          <h2 className="section-title">Course Categories</h2>
          <div className="categories-grid">
            <button
              className={`category-card ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              <div className="category-icon">📚</div>
              <h3>All Courses</h3>
              <p>Browse all available courses</p>
            </button>
            {courseCategories.map((category) => (
              <button
                key={category.id}
                className={`category-card ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="category-icon">{category.icon}</div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="courses-listing">
        <div className="container">
          <div className="courses-header">
            <h2>
              {selectedCategory === 'all' 
                ? 'All Courses' 
                : courseCategories.find(cat => cat.id === selectedCategory)?.name
              }
            </h2>
            <p>{getFilteredCourses().length} courses available</p>
          </div>
          
          <div className="courses-grid">
            {getFilteredCourses().map((course) => (
              <div key={course.id} className="course-card">
                <div className="course-header">
                  <div className="course-icon">{course.icon}</div>
                  <div className="course-rating">
                    <div className="stars">
                      {renderStars(course.rating)}
                    </div>
                    <span className="rating-text">({course.rating})</span>
                  </div>
                </div>
                
                <h3 className="course-name">{course.name}</h3>
                <p className="course-description">{course.description}</p>
                
                <div className="course-details">
                  <div className="detail-item">
                    <span className="detail-icon">📅</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">📊</span>
                    <span>{course.level}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">👥</span>
                    <span>{course.students} students</span>
                  </div>
                </div>
                
                <div className="course-footer">
                  <div className="course-price">{course.price}</div>
                  <div className="course-actions">
                    <Link to={`/courses/${course.id}`} className="btn btn-primary">
                      View Details
                    </Link>
                    <button className="btn btn-secondary">Enquire Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="courses-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Can't Find the Right Course?</h2>
            <p>Our counselors will help you choose the perfect course based on your career goals</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Talk to Counselor</button>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Courses

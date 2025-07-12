import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Courses.css'

const Courses = () => {
  const [activeTab, setActiveTab] = useState('classroom')
  const [selectedCategory, setSelectedCategory] = useState('software-development')

  const courseCategories = [
    {
      id: 'software-development',
      name: 'Software Development',
      icon: '💻',
      courses: [
        { name: 'Python Certification Course', icon: '🐍', duration: '4 months', level: 'Beginner to Advanced', link: '/course/python' },
        { name: 'Java Course', icon: '☕', duration: '5 months', level: 'Beginner to Advanced', link: '/course/java' },
        { name: 'PHP Course', icon: '🐘', duration: '3 months', level: 'Beginner to Intermediate', link: '/course/php' },
        { name: 'React Training Course', icon: '⚛️', duration: '3 months', level: 'Intermediate', link: '/course/react' },
        { name: 'Angular Training Course', icon: '🅰️', duration: '3 months', level: 'Intermediate', link: '/course/angular' },
        { name: 'Node.js Training', icon: '🟢', duration: '2 months', level: 'Intermediate', link: '/course/nodejs' },
        { name: 'Full Stack Development', icon: '🔧', duration: '6 months', level: 'Beginner to Advanced', link: '/contact' },
        { name: 'C/C++ Training Course', icon: '🔤', duration: '3 months', level: 'Beginner', link: '/contact' }
      ]
    },
    {
      id: 'mobile-development',
      name: 'Mobile Development',
      icon: '📱',
      courses: [
        { name: 'Android Training Course', icon: '🤖', duration: '4 months', level: 'Beginner to Advanced', link: '/course/android' },
        { name: 'iOS Certification Course', icon: '🍎', duration: '4 months', level: 'Beginner to Advanced', link: '/course/ios' },
        { name: 'React Native Course', icon: '⚛️', duration: '3 months', level: 'Intermediate', link: '/course/react-native' },
        { name: 'Flutter Course', icon: '🦋', duration: '3 months', level: 'Intermediate', link: '/course/flutter' }
      ]
    },
    {
      id: 'data-science',
      name: 'Data Science & AI',
      icon: '🤖',
      courses: [
        { name: 'Machine Learning Course', icon: '🧠', duration: '5 months', level: 'Intermediate to Advanced', link: '/course/machine-learning' },
        { name: 'Data Analytics Course', icon: '📊', duration: '4 months', level: 'Beginner to Intermediate', link: '/course/data-analytics' },
        { name: 'Artificial Intelligence Course', icon: '🤖', duration: '6 months', level: 'Advanced', link: '/course/ai' },
        { name: 'Data Science Course', icon: '📈', duration: '5 months', level: 'Intermediate to Advanced', link: '/course/data-science' },
        { name: 'Data Visualization Course', icon: '📉', duration: '2 months', level: 'Beginner', link: '/contact' }
      ]
    },
    {
      id: 'design',
      name: 'Design',
      icon: '🎨',
      courses: [
        { name: 'Web Design Course', icon: '🌐', duration: '3 months', level: 'Beginner to Intermediate', link: '/course/htmlcss' },
        { name: 'Graphic Design Course', icon: '🎨', duration: '4 months', level: 'Beginner to Advanced', link: '/course/graphic-design' },
        { name: 'UI/UX Design Course', icon: '📱', duration: '4 months', level: 'Beginner to Advanced', link: '/course/uiux-design' },
        { name: '3D Animation Course', icon: '🎬', duration: '6 months', level: 'Beginner to Advanced', link: '/contact' }
      ]
    },
    {
      id: 'testing',
      name: 'Software Testing',
      icon: '🧪',
      courses: [
        { name: 'Software Testing Course', icon: '🧪', duration: '3 months', level: 'Beginner to Intermediate', link: '/contact' },
        { name: 'Manual Testing Course', icon: '✋', duration: '2 months', level: 'Beginner', link: '/contact' },
        { name: 'Automation Testing Course', icon: '🤖', duration: '3 months', level: 'Intermediate', link: '/contact' },
        { name: 'Selenium Course', icon: '🔍', duration: '2 months', level: 'Intermediate', link: '/contact' }
      ]
    },
    {
      id: 'digital-marketing',
      name: 'Digital Marketing',
      icon: '📢',
      courses: [
        { name: 'Digital Marketing Course', icon: '📢', duration: '3 months', level: 'Beginner to Advanced', link: '/contact' },
        { name: 'SEO Course', icon: '🔍', duration: '2 months', level: 'Beginner to Intermediate', link: '/contact' }
      ]
    }
  ]

  const getCurrentCourses = () => {
    return courseCategories.find(cat => cat.id === selectedCategory)?.courses || []
  }

  return (
    <section className="courses" id="courses">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get Choice of our best Courses</h2>
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

        <div className="courses-content">
          <div className="category-sidebar">
            {courseCategories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
              </button>
            ))}
          </div>

          <div className="courses-grid">
            {getCurrentCourses().map((course, index) => (
              <div key={index} className="course-card">
                <div className="course-icon">{course.icon}</div>
                <h3 className="course-name">{course.name}</h3>
                <div className="course-details">
                  <span className="course-duration">📅 {course.duration}</span>
                  <span className="course-level">📊 {course.level}</span>
                </div>
                <div className="course-actions">
                  {course.link ? (
                    <Link to={course.link} className="btn btn-primary">View Details</Link>
                  ) : (
                    <button className="btn btn-primary">View Details</button>
                  )}
                  <Link to="/contact" className="btn btn-secondary">Enquire Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Courses

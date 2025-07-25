import { Link } from 'react-router-dom'
import './Webinars.css'

const Webinars = () => {
  const webinarCourses = [
    {
      id: 'python',
      name: 'Python Certification Course',
      icon: '🐍',
      duration: '4 months',
      level: 'Beginner to Advanced',
      price: '10% discount',
      rating: 4.8,
      students: 1250,
      description: 'Master Python programming from basics to advanced concepts including Django, Flask, and data science libraries.'
    },
    {
      id: 'java',
      name: 'Java Development Course',
      icon: '☕',
      duration: '5 months',
      level: 'Beginner to Advanced',
      price: '10% discount',
      rating: 4.7,
      students: 980,
      description: 'Complete Java programming course covering Core Java, Spring Framework, and enterprise application development.'
    },
    {
      id: 'react',
      name: 'React Development Course',
      icon: '⚛️',
      duration: '3 months',
      level: 'Intermediate',
      price: '10% discount',
      rating: 4.9,
      students: 750,
      description: 'Build modern web applications using React, Redux, and related technologies.'
    }
  ]

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`star ${i < Math.floor(rating) ? 'filled' : ''}`}>★</span>
    ))
  }

  return (
    <div className="webinars-page">
      <div className="webinars-hero">
        <div className="container">
          <div className="webinars-hero-content">
            <h1>Webinars</h1>
            <p>Free online sessions by industry experts - Interactive learning experiences</p>
          </div>
        </div>
      </div>

      <section className="webinars-listing">
        <div className="container">
          <div className="webinars-header">
            <h2>Featured Course Webinars</h2>
            <p>Join our expert-led webinars to get insights into our most popular courses</p>
          </div>

          <div className="webinars-grid">
            {webinarCourses.map((course) => (
              <div key={course.id} className="webinar-card">
                <div className="webinar-header">
                  <div className="webinar-icon">{course.icon}</div>
                  <div className="webinar-rating">
                    <div className="stars">
                      {renderStars(course.rating)}
                    </div>
                    <span className="rating-text">({course.rating})</span>
                  </div>
                </div>

                <h3 className="webinar-name">{course.name}</h3>
                <p className="webinar-description">{course.description}</p>

                <div className="webinar-details">
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

                <div className="webinar-footer">
                  <div className="webinar-price">{course.price}</div>
                  <div className="webinar-actions">
                    <Link to={`/courses/${course.id}`} className="btn btn-primary">
                      View Details
                    </Link>
                    <a
                      href={`https://wa.me/917659844898?text=Hello%2C%20I%20want%20${course.name.replace(/\s+/g, '%20')}%20information`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Webinars

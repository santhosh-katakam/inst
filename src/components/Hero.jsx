import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  const stats = [
    { number: '1 Lac+', label: 'Students Placed' },
    { number: '3000+', label: 'Companies TieUp' },
    { number: '19+', label: 'Offices in India' },
    { number: '50+', label: 'Industry Courses' }
  ]

  const ratings = [
    { platform: 'Google', rating: '4.5', reviews: '1038' },
    { platform: 'Facebook', rating: '4.7', reviews: '312' },
    { platform: 'JustDial', rating: '4.3', reviews: '984' }
  ]

  const images = [
    'src/assets/hero1.jpg',
    'src/assets/hero2.jpg',
  ];
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-carousel-background">
        <img
          src={images[currentImage]}
          alt="Hero Slide"
          className="hero-carousel-image"
        />
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-main">
            <div className="hero-text">
              <h1 className="hero-title">
                Start Learning from Khammam&apos;s Best<br />
                <span className="highlight">IT Training Company</span>
              </h1>

              <div className="hero-actions">
                <Link to="/courses" className="btn btn-primary">Explore Courses</Link>
              </div>
            </div>
          </div>

          <div className="hero-stats-banner">
            <div className="years-badge">
              <div className="years-content">
                <div className="years-icon">
                  <span className="years-number">15</span>
                  <div className="years-stars">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                  </div>
                  <span className="years-label">YEARS</span>
                </div>
                <div className="years-text">
                  <span>15 Years in the field of</span>
                  <span>IT Training &</span>
                  <span>Placement Industry</span>
                </div>
              </div>
            </div>

            <div className="stats-row">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-icon">
                    {index === 0 && '👥'}
                    {index === 1 && '🏢'}
                    {index === 2 && '🏢'}
                    {index === 3 && '📚'}
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-number">{stat.number}</h3>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-action-bar">
        <div className="action-item call">
          <span className="action-icon">📞</span>
          <span className="action-text">Call Now!</span>
        </div>
        <div className="action-item whatsapp">
          <span className="action-icon">💬</span>
          <span className="action-text">Leave a Whatsapp Message</span>
        </div>
        <div className="action-item inquire">
          <span className="action-icon">📝</span>
          <span className="action-text">Inquire Now</span>
        </div>
      </div>


    </section>
  )
}

export default Hero

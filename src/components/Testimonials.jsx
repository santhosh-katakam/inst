import { useState } from 'react'
import './Testimonials.css'

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      name: 'Ravina Vajubhai Lathiya',
      role: 'Software Tester',
      image: '/testimonials/ravina.jpg',
      review: 'I am a non-IT student and I\'ve been taking classes at TechInstitute for the past few months. Their faculty is excellent in gaining knowledge and their delivery of practical things. It is a great place to learn and grow.',
      rating: 5
    },
    {
      name: 'Nupur Bhatt',
      role: 'Software Tester',
      image: '/testimonials/nupur.jpg',
      review: 'I really liked the trainer\'s support in gaining knowledge and their delivery of practical things. It is a great learning experience with excellent placement support.',
      rating: 5
    },
    {
      name: 'Viral Gajjar',
      role: 'Data Analyst',
      image: '/testimonials/viral.jpg',
      review: 'Overall Training is good & enhance my knowledge in Python, SQL & Data Analysis Topics. Overall Good Experience with excellent faculty and placement assistance.',
      rating: 5
    },
    {
      name: 'Shruti Patel',
      role: 'PHP Developer',
      image: '/testimonials/shruti.jpg',
      review: 'My Experience in TechInstitute was superb. I got proper guidance and training. The faculties were very helpful and supportive throughout the course.',
      rating: 5
    },
    {
      name: 'Avi Mangukiya',
      role: 'iOS Developer',
      image: '/testimonials/avi.jpg',
      review: 'I recently completed an internship with TechInstitute and it was a great learning experience. Great place for learning iOS development with hands-on projects.',
      rating: 5
    },
    {
      name: 'Om Sailor',
      role: 'SEO Executive',
      image: '/testimonials/om.jpg',
      review: 'Wonderful experience with TechInstitute, I got a job within finished my course without any reference. Thank you TechInstitute for the excellent training.',
      rating: 5
    }
  ]

  const galleryImages = [
    { src: '/gallery/event1.jpg', title: 'Recruiting Events', category: 'events' },
    { src: '/gallery/festival1.jpg', title: 'Diwali Celebration', category: 'festivals' },
    { src: '/gallery/picnic1.jpg', title: 'Annual Picnic', category: 'events' },
    { src: '/gallery/workshop1.jpg', title: 'IT Workshop', category: 'workshop' },
    { src: '/gallery/placement1.jpg', title: 'Placement Orientation', category: 'seminars' },
    { src: '/gallery/jobfair1.jpg', title: 'Tech Job Fair', category: 'job-fair' },
    { src: '/gallery/seminar1.jpg', title: 'Career Seminar', category: 'seminars' },
    { src: '/gallery/celebration1.jpg', title: 'Festival Celebration', category: 'festivals' }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3))
  }

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
    ))
  }

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Student Reviews</h2>
        </div>

        <div className="testimonials-slider">
          <button className="slider-btn prev" onClick={prevSlide}>‹</button>
          
          <div className="testimonials-container">
            <div 
              className="testimonials-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="testimonials-slide">
                  {testimonials.slice(slideIndex * 3, (slideIndex + 1) * 3).map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                      <div className="testimonial-header">
                        <img src={testimonial.image} alt={testimonial.name} className="testimonial-avatar" />
                        <div className="testimonial-info">
                          <h4 className="testimonial-name">{testimonial.name}</h4>
                          <p className="testimonial-role">{testimonial.role}</p>
                          <div className="testimonial-rating">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                      <p className="testimonial-review">{testimonial.review}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          <button className="slider-btn next" onClick={nextSlide}>›</button>
        </div>

        <div className="slider-dots">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
            <button
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      <div className="life-at-institute">
        <div className="container">
          <h2 className="section-title">Life at TechInstitute</h2>
          
          <div className="gallery-filters">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Events</button>
            <button className="filter-btn">Job Fair</button>
            <button className="filter-btn">Festivals</button>
            <button className="filter-btn">Seminars</button>
            <button className="filter-btn">Workshop</button>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image.src} alt={image.title} />
                <div className="gallery-overlay">
                  <h4>{image.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

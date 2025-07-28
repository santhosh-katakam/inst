import { useState } from 'react'
import './Testimonials.css'
import rcsBi from '../assets/rcs_bi.png';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      name: 'Santhosh Katakam',
      role: 'Java Full Stack Developer',
      image: '/testimonials/santhosh.jpg',
      review: 'I have taken the Java Full Stack Developer training at RealCourse Synapse, and it was a great learning experience. The content was well-structured, and the trainers were very supportive and knowledgeable.',
      rating: 5
    },
    {
      name: 'Abhishaik Sheik',
      role: 'Java Full Stack Developer',
      image: '/testimonials/abhishaik.jpg',
      review: 'The instructions provided for the Java Full Stack topics are clear and cover the essential areas needed for a beginner to intermediate learner. The content explains both frontend and backend concepts, and the structure is logical — starting from core Java, moving to frameworks like Spring Boot, and including frontend technologies like HTML, CSS, JavaScript, and Angular/React.',
      rating: 5
    },
    {
      name: 'Usha Rani Dharavath',
      role: 'Software Developer',
      image: '/testimonials/usha.jpg',
      review: 'I am grateful to Real Code Synapse Institute, Khammam, for being the foundation of my career in software development. The training provided here was practical, industry-aligned, and focused heavily on hands-on learning, which gave me strong confidence in my skills.',
      rating: 5
    },
    {
      name: 'Potti Bhavya',
      role: 'Full Stack Java Developer',
      image: '/testimonials/potti.jpg',
      review: 'RCS\'s structured and practical approach to Full Stack Java development was very effective. The course covered everything from basics to deployment in a simple and clear manner.',
      rating: 5
    },
    {
      name: 'Pujitha Marikanti',
      role: 'Java Full Stack Developer',
      image: '/testimonials/pujitha.jpg',
      review: 'I have completed java full stack training in realcode synapse. Here the faucality are real employees It was very good',
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
    { src: rcsBi, title: 'RCS', category: 'RCS' },
    { src: rcsBi, title: 'RCS', category: 'RCS' }
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
          <h2 className="section-title">Life at RealCode Synapse</h2>
          
          {/* <div className="gallery-filters">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Events</button>
            <button className="filter-btn">Job Fair</button>
            <button className="filter-btn">Festivals</button>
            <button className="filter-btn">Seminars</button>
            <button className="filter-btn">Workshop</button>
          </div> */}

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

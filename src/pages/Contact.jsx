import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
    alert('Thank you for your inquiry! We will contact you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: '📍',
      title: 'Head Office',
      details: ['123 Tech Street', 'Ahmedabad, Gujarat 380001', 'India']
    },
    {
      icon: '📞',
      title: 'Phone',
      details: ['+91-7622011173', '+91-9999999999']
    },
    {
      icon: '✉️',
      title: 'Email',
      details: ['info@techinstitute.com', 'admissions@techinstitute.com']
    },
    {
      icon: '🕒',
      title: 'Office Hours',
      details: ['Monday - Saturday: 9:00 AM - 8:00 PM', 'Sunday: 10:00 AM - 6:00 PM']
    }
  ]

  const locations = [
    {
      city: 'Ahmedabad',
      address: '123 Tech Street, C.G. Road, Ahmedabad - 380001',
      phone: '+91-9974755006',
      email: 'ahmedabad@techinstitute.com'
    },
    {
      city: 'Vadodara',
      address: '456 Innovation Hub, Vadodara - 390001',
      phone: '+91-9725355009',
      email: 'vadodara@techinstitute.com'
    },
    {
      city: 'Rajkot',
      address: '789 Learning Center, Rajkot - 360001',
      phone: '+91-9724004242',
      email: 'rajkot@techinstitute.com'
    },
    {
      city: 'Surat',
      address: '321 Education Plaza, Ring Road, Surat - 395001',
      phone: '+91-7069598828',
      email: 'surat@techinstitute.com'
    }
  ]

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Contact Us</h1>
            <p>Get in touch with us for any inquiries about our courses and services</p>
          </div>
        </div>
      </div>

      <section className="contact-main">
        <div className="container">
          <div className="contact-content">
            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="course">Interested Course</label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                    >
                      <option value="">Select a course</option>
                      <option value="python">Python Development</option>
                      <option value="java">Java Development</option>
                      <option value="react">React Development</option>
                      <option value="android">Android Development</option>
                      <option value="data-science">Data Science</option>
                      <option value="digital-marketing">Digital Marketing</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>

            <div className="contact-info-section">
              <h2>Get in Touch</h2>
              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-card">
                    <div className="info-icon">{info.icon}</div>
                    <h3>{info.title}</h3>
                    <div className="info-details">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex}>{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-locations">
        <div className="container">
          <h2 className="section-title">Our Training Centers</h2>
          <div className="locations-grid">
            {locations.map((location, index) => (
              <div key={index} className="location-card">
                <h3>{location.city}</h3>
                <div className="location-details">
                  <p><strong>Address:</strong> {location.address}</p>
                  <p><strong>Phone:</strong> {location.phone}</p>
                  <p><strong>Email:</strong> {location.email}</p>
                </div>
                <div className="location-actions">
                  <button className="btn btn-secondary">Get Directions</button>
                  <button className="btn btn-primary">Visit Center</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-map">
        <div className="container">
          <h2 className="section-title">Find Us</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <p>Interactive Map Coming Soon</p>
              <p>Visit our centers across Gujarat and Maharashtra</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

import './Footer.css'
import rcsLogo from '../assets/rcs_logo.png'
// import InquiryForm from './components/InquiryForm';

const Footer = () => {
  const locations = [
    { city: 'Ahmedabad', branches: ['C.G.Road'] },
  ]

  const services = [
    'IT Training',
    'Online IT Training',
    'Live Training',
    'Placement',
    'Outsourcing',
    'Study Abroad',
    'JobFest',
    'Campus Drive'
  ]

  const courseCategories = [
    'Software Development',
    'Designing',
    'Mobile Development',
    'Specialized Courses',
    'Data Science AI And ML',
    'Kids',
    'Live Project Training',
    'Software Testing',
    'Hardware Networking',
    'Digital Marketing'
  ]

  const otherPages = [
    'Blogs',
    'Contact',
    'Sitemap',
    'Privacy Policy',
    'List of Top IT Companies'
  ]

  const webinars = [
    {
      title: 'How to Protect your Website from Hackers',
      date: '27th June',
      trainer: 'Security Expert'
    },
    {
      title: 'Building and Publishing Mobile Apps',
      date: '27th June',
      trainer: 'Mobile Developer'
    },
    {
      title: 'Skills you need to Become an Expert Data Analyst',
      date: '28th June',
      trainer: 'Data Scientist'
    },
    {
      title: 'Before Starting Digital Marketing Career',
      date: '28th June',
      trainer: 'Marketing Expert'
    }
  ]

  const blogs = [
    {
      title: 'Top 20 Java Interview Questions You Must Know in 2025',
      date: 'Jun 20, 2025',
      excerpt: 'Top 20 Java Interview Questions for 2025! Master core concepts, OOP, Java updates, multithreading...'
    },
    {
      title: 'Complete Java Roadmap for Beginners to Advanced',
      date: 'Jun 20, 2025',
      excerpt: 'Master Java from basics to advanced: setup, OOP, collections, multithreading, JDBC, Spring, tools...'
    },
    {
      title: 'SEO Score Checker: Improve Your Website with Actionable Tips',
      date: 'Jun 04, 2025',
      excerpt: 'Use our SEO Score Checker to analyze your website\'s performance and discover practical tips...'
    }
  ]

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          {/* <div className="webinars-section">
            <h3>Upcoming Webinars</h3>
            <div className="webinars-grid">
              {webinars.map((webinar, index) => (
                <div key={index} className="webinar-card">
                  <h4>{webinar.title}</h4>
                  <p className="webinar-date">Live on {webinar.date}</p>
                  <p className="webinar-trainer">Trainer: {webinar.trainer}</p>
                  <button className="btn btn-primary">Attend Webinar</button>
                </div>
              ))}
            </div>
          </div> */}
{/* 
          <div className="locations-section">
            <h3>Our Training Centers in India</h3>
            <div className="locations-grid">
              {locations.map((location, index) => (
                <div key={index} className="location-card">
                  <h4>{location.city}</h4>
                  <ul>
                    {location.branches.map((branch, branchIndex) => (
                      <li key={branchIndex}>{branch}</li>
                    ))}
                  </ul>
                  <div className="location-actions">
                    <button className="btn btn-secondary">Visit Us</button>
                    <button className="btn btn-secondary">Get Direction</button>
                  </div>
                </div>
              ))}
            </div>
          </div> */}


        </div>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <img src={rcsLogo} alt="RCS Logo" className="footer-logo" />
              
              <div className="footer-locations">
                <h4>Locations where you can Visit Us</h4>
                <div className="location-links">
                  <div className="location-group">
                    <h5>India, Telangana, Khammam</h5>
                    <ul>
                    </ul>
                  </div>
                  <div className="other-cities">
                    <ul>
                      <li><a href="#">gattaiah centre, Kavitha Degree College, opp. to Bank of Maharastra, VDO's Colony, Khammam, Telangana 507002</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Services</h4>
                <ul>
                  {services.map((service, index) => (
                    <li key={index}><a href="#">{service}</a></li>
                  ))}
                </ul>
              </div>

              <div className="footer-column">
                <h4>Course Categories</h4>
                <ul>
                  {courseCategories.map((category, index) => (
                    <li key={index}><a href="#">{category}</a></li>
                  ))}
                </ul>
              </div>

              <div className="footer-column">
                <h4>Other Pages</h4>
                <ul>
                  {otherPages.map((page, index) => (
                    <li key={index}><a href="#">{page}</a></li>
                  ))}
                </ul>
              </div>

              <div className="footer-column">
                <h4>Follow us on</h4>
                <div className="social-links">
                  <a href="#" className="social-link facebook">📘</a>
                  <a href="#" className="social-link instagram">📷</a>
                  <a href="#" className="social-link linkedin">💼</a>
                  <a href="#" className="social-link twitter">🐦</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; 2025 RealCode Synapse. All Rights Reserved.</p>
            <div className="footer-actions">
              <a href="tel:9392963190" className="footer-btn">Call Now!</a>
              <a
                href="https://wa.me/919392963190?text=Hi%2C%20how%20can%20I%20help%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-btn"
              >
                Leave a WhatsApp Message
              </a>
              <a
                href="https://wa.me/919392963190?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20courses."
                target="_blank"
                rel="noopener noreferrer"
                className="footer-btn"
              >
                Inquire Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <InquiryForm /> */}
    </footer>
  )
}

export default Footer

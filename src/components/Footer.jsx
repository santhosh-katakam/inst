import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import rcsLogo from '../assets/rcs_logo.png'
// import InquiryForm from './components/InquiryForm';

const Footer = () => {
  const [blogs, setBlogs] = useState([])

  // Load blogs from localStorage
  useEffect(() => {
    const loadBlogs = () => {
      const savedBlogs = localStorage.getItem('rcs-blogs');
      if (savedBlogs) {
        const parsedBlogs = JSON.parse(savedBlogs);
        setBlogs(parsedBlogs.slice(0, 3)); // Show only latest 3 blogs
      } else {
        // Default blogs if none exist
        const defaultBlogs = [
          {
            id: 'java-interview-questions-2025',
            title: 'Top 20 Java Interview Questions You Must Know in 2025',
            date: 'Jun 20, 2025',
            excerpt: 'Top 20 Java Interview Questions for 2025! Master core concepts, OOP, Java updates, multithreading...'
          },
          {
            id: 'java-roadmap-beginners',
            title: 'Complete Java Roadmap for Beginners to Advanced',
            date: 'Jun 20, 2025',
            excerpt: 'Master Java from basics to advanced: setup, OOP, collections, multithreading, JDBC, Spring, tools...'
          },
          {
            id: 'seo-score-checker-tips',
            title: 'SEO Score Checker: Improve Your Website with Actionable Tips',
            date: 'Jun 04, 2025',
            excerpt: 'Use our SEO Score Checker to analyze your website\'s performance and discover practical tips...'
          }
        ];
        setBlogs(defaultBlogs);
      }
    };

    loadBlogs();

    // Listen for storage changes (when admin panel updates blogs)
    const handleStorageChange = (e) => {
      if (e.key === 'rcs-blogs') {
        loadBlogs();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Also listen for custom events from same window (admin panel)
    const handleBlogUpdate = () => {
      loadBlogs();
    };

    window.addEventListener('blogUpdated', handleBlogUpdate);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('blogUpdated', handleBlogUpdate);
    };
  }, [])
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



  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="blogs-section">
            <h3>Latest Blogs</h3>
            <div className="blogs-grid">
              {blogs.map((blog, index) => (
                <div key={index} className="blog-card">
                  <h4>{blog.title}</h4>
                  <p className="blog-date">{blog.date}</p>
                  <p className="blog-excerpt">{blog.excerpt}</p>
                  <Link to={`/blog/${blog.id}`} className="blog-read-more">Read More</Link>
                </div>
              ))}
            </div>
          </div>
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
              <a href="tel:7659844898" className="footer-btn">Call Now!</a>
              <a
                href="https://wa.me/917659844898?text=Hi%2C%20how%20can%20I%20help%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-btn"
              >
                Leave a WhatsApp Message
              </a>
              <a
                href="https://wa.me/917659844898?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20courses."
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

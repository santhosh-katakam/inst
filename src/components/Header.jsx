import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import rcsLogo from '../assets/rcs_logo.png'; // Add this import at the top

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const navigate = useNavigate()

  // Course name to route mapping
  const courseRoutes = {
    'Python': '/course/python',
    'Java': '/course/java',
    'PHP': '/course/php',
    'React': '/course/react',
    'Angular': '/course/angular',
    'Node.js': '/course/nodejs',
    'JavaScript': '/course/javascript',
    'Web Design': '/course/htmlcss',
    'Android': '/course/android',
    'iOS': '/course/ios',
    'React Native': '/course/react-native',
    'Flutter': '/course/flutter',
    'Machine Learning': '/course/machine-learning',
    'Data Analytics': '/course/data-analytics',
    'AI': '/course/ai',
    'Data Science': '/course/data-science',
    'Graphic Design': '/course/graphic-design',
    'UI/UX Design': '/course/uiux-design'
  }

  const courseCategories = [
    {
      name: 'Software Development',
      icon: '💻',
      courses: ['Python', 'Java', 'PHP', 'React', 'Angular', 'Node.js']
    },
    {
      name: 'Mobile Development',
      icon: '📱',
      courses: ['Android', 'React Native', 'Flutter']
    },
    {
      name: 'Data Science & AI',
      icon: '🤖',
      courses: ['Machine Learning', 'Data Analytics', 'AI', 'Data Science']
    },
    {
      name: 'Design',
      icon: '🎨',
      courses: ['Web Design', 'Graphic Design', 'UI/UX Design']
    }
  ]

  const locations = [
    'Ahmedabad', 'Vadodara', 'Rajkot', 'Surat', 'Gandhinagar', 'Nagpur'
  ]

  return (
    <header className="header">

      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <Link to="/" className="logo">
              <img src={rcsLogo} alt="RCS Logo" className="logo-icon" />
              <span className="logo-text">
                Real Code Synapse
                <div className="logo-tagline">
                  <span>Skill Development | External Resourcing | Employment Support | Overseas Learning</span>
                </div>
              </span>
            </Link>

            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <div 
                className="nav-item dropdown"
                onMouseEnter={() => setActiveDropdown('courses')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link to="/courses" className="nav-link">
                  Courses <span className="dropdown-arrow">▼</span>
                </Link>
                {activeDropdown === 'courses' && (
                  <div className="dropdown-menu courses-dropdown">
                    <div className="dropdown-grid">
                      {courseCategories.map((category, index) => (
                        <div key={index} className="dropdown-column">
                          <h4 className="dropdown-title">
                            <span className="category-icon">{category.icon}</span>
                            {category.name}
                          </h4>
                          <ul className="dropdown-list">
                            {category.courses.map((course, courseIndex) => (
                              <li key={courseIndex}>
                                <Link
                                  to={courseRoutes[course] || '/courses'}
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {course}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link to="/placement" className="nav-link">Placement</Link>
              <Link to="/webinars" className="nav-link">Webinars</Link>
              

              <a href="tel:+91-9392963190" className="nav-link phone">+91-9392963190</a>
            </div>

            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

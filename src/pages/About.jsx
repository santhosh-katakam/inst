import './About.css'

const About = () => {
  const stats = [
    { number: '15+', label: 'Years of Experience' },
    { number: '1 Lac+', label: 'Students Trained' },
    { number: '3000+', label: 'Company Partners' },
    { number: '19+', label: 'Training Centers' },
    { number: '50+', label: 'Industry Courses' },
    { number: '95%', label: 'Placement Rate' }
  ]

  const milestones = [
    { year: '2009', title: 'Foundation', description: 'TechInstitute was founded with a vision to provide quality IT education' },
    { year: '2012', title: 'Expansion', description: 'Opened multiple centers across Gujarat' },
    { year: '2015', title: 'Industry Partnerships', description: 'Established partnerships with 1000+ companies' },
    { year: '2018', title: 'Online Learning', description: 'Launched comprehensive online training programs' },
    { year: '2020', title: 'Digital Transformation', description: 'Adapted to remote learning during pandemic' },
    { year: '2023', title: 'AI & Data Science', description: 'Introduced cutting-edge AI and Data Science courses' }
  ]

  const values = [
    {
      icon: '🎯',
      title: 'Quality Education',
      description: 'We provide industry-relevant curriculum designed by experts to ensure students get the best learning experience.'
    },
    {
      icon: '💼',
      title: 'Job Placement',
      description: 'Our dedicated placement team works tirelessly to ensure every student gets placed in their dream company.'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'We constantly update our courses and teaching methods to stay ahead of industry trends.'
    },
    {
      icon: '🤝',
      title: 'Industry Connect',
      description: 'Strong partnerships with leading companies provide real-world exposure and job opportunities.'
    }
  ]

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About TechInstitute</h1>
            <p className="hero-subtitle">
              Leading IT Training Institute with 15+ Years of Excellence in Education and Placement
            </p>
          </div>
        </div>
      </div>

      <section className="about-intro">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>Empowering Careers Through Technology Education</h2>
              <p>
                TechInstitute has been at the forefront of IT education for over 15 years, 
                transforming the careers of more than 1 lakh students. We specialize in 
                providing industry-relevant training in cutting-edge technologies with 
                guaranteed placement assistance.
              </p>
              <p>
                Our comprehensive approach combines theoretical knowledge with practical 
                hands-on experience, ensuring our students are job-ready from day one. 
                With 19+ training centers across India and partnerships with 3000+ companies, 
                we have established ourselves as the most trusted name in IT education.
              </p>
            </div>
            <div className="intro-image">
              <img src="/about-image.jpg" alt="TechInstitute Campus" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="container">
          <h2 className="section-title">Our Achievements</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-timeline">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your IT Career?</h2>
            <p>Join thousands of successful graduates who have transformed their careers with TechInstitute</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Explore Courses</button>
              <button className="btn btn-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

import './Placement.css'

const Placement = () => {
  const placementInitiatives = [
    {
      title: 'JobFest by RCS Institute',
      description: 'RCS Institute organizes a JobFest where 50+ Companies interview Candidates for their Job Openings. This event is organized at a Convention center',
      features: [
        'Maximum salary offered by companies during JobFest for a fresher has been 7.2 lacs',
        'Each student interviews with maximum companies in 1 day',
        'Companies get to interact with multiple candidates and offer maximum salaries',
        'Candidates select the best Job Offers'
      ],
      image: '/jobfest-image.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=NJL4OS_vJI8'
    },
    {
      title: 'CampusFest by RCS Institute',
      description: 'RCS Institute organizes a CampusFest where 8-10 companies interview candidates at the local office. Companies access the top talent.',
      features: [
        'Students get to meet up to 10 companies in 1 day',
        'Hiring managers get to meet trained candidates',
        'Best Salaries are offered to all candidates'
      ],
      image: '/campusfest-image.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=gj5dHrrtCC8'
    }
  ]

  const companyLogos = [
    'google', 'microsoft', 'amazon', 'tcs', 'infosys', 'wipro', 
    'cognizant', 'accenture', 'ibm', 'oracle', 'adobe', 'salesforce'
  ]

  return (
    <section className="placement" id="placement">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginTop: '40px' }}>
          <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
            Placement Initiative for our Students
          </h2>
          <div className="placement-tabs" style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '30px' }}>
            <button className="tab-btn active">JobFest</button>
            <button className="tab-btn">Campus Drive</button>
          </div>
        </div>

        <div className="placement-content">
          {placementInitiatives.map((initiative, index) => (
            <div key={index} className="placement-initiative">
              <div className="initiative-content">
                <div className="initiative-text">
                  <h3 className="initiative-title">{initiative.title}</h3>
                  <p className="initiative-description">{initiative.description}</p>
                  <ul className="initiative-features">
                    {initiative.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                  <div className="initiative-actions">
                    <a href={initiative.videoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Watch Video</a>
                  </div>
                </div>
                <div className="initiative-image">
                  <img src={initiative.image} alt={initiative.title} />
                </div>
              </div>
              <div className="registration-form">
                <h4>Register for Next {initiative.title.includes('JobFest') ? 'Job Fest' : 'Campus Drive'}</h4>
                <form className="placement-form">
                  <div className="form-row">
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email Address" required />
                  </div>
                  <div className="form-row">
                    <input type="tel" placeholder="Phone Number" required />
                    <select required>
                      <option value="">Select Course</option>
                      <option value="python">Python</option>
                      <option value="java">Java</option>
                      <option value="react">React</option>
                      <option value="android">Android</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-accent">Send Inquiry</button>
                </form>
              </div>
            </div>
          ))}
        </div>

        <div className="company-partners">
          <h3 className="partners-title">Our Hiring Partners</h3>
          <div className="company-logos">
            {companyLogos.map((company, index) => (
              <div key={index} className="company-logo">
                <img src={`/companies/${company}-logo.png`} alt={company} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Placement;

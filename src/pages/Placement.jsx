import './Placement.css'

const Placement = () => {
  const companyLogos = [
    'google', 'microsoft', 'amazon', 'tcs', 'infosys', 'wipro',
    'cognizant', 'accenture', 'ibm', 'oracle', 'adobe', 'salesforce',
    'deloitte', 'capgemini', 'hcl', 'tech-mahindra', 'mindtree', 'mphasis',
    'l&t-infotech', 'persistent', 'zensar', 'cyient', 'hexaware', 'sonata',
    'birlasoft', 'mastek', 'rolta', 'polaris', 'kpit', 'syntel',
    'igate', 'patni', 'satyam', 'niit', 'aptech', 'ssi',
    'nucleus', 'geometric', 'subex', 'mindteck'
  ]

  return (
    <section className="placement" id="placement">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginTop: '40px', padding: '60px 0 40px 0' }}>
          <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
            Placements
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '60px' }}>
            Coming Soon...
          </p>
        </div>

        <div className="company-partners">
          <h3 className="partners-title" style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '40px', color: '#333' }}>
            Our Hiring Partners
          </h3>
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

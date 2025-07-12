import { useParams } from 'react-router-dom'

const LocationPage = () => {
  const { city } = useParams()
  
  return (
    <div className="page-container">
      <div className="page-hero">
        <div className="container">
          <h1>{city} Center</h1>
          <p>TechInstitute training center in {city}</p>
        </div>
      </div>
      <div className="container">
        <div className="page-content">
          <h2>Coming Soon</h2>
          <p>Detailed information about our {city} center will be available here.</p>
        </div>
      </div>
    </div>
  )
}

export default LocationPage

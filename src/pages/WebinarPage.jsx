import { useParams } from 'react-router-dom'

const WebinarPage = () => {
  const { id } = useParams()
  
  return (
    <div className="page-container">
      <div className="page-hero">
        <div className="container">
          <h1>Webinar Details</h1>
          <p>Webinar ID: {id}</p>
        </div>
      </div>
      <div className="container">
        <div className="page-content">
          <h2>Coming Soon</h2>
          <p>Individual webinar details and registration will be available here.</p>
        </div>
      </div>
    </div>
  )
}

export default WebinarPage

import Hero from '../components/Hero'
// import Courses from '../components/Courses'
import Placement from '../components/Placement'
import Testimonials from '../components/Testimonials'
// import CompanyRatings from '../components/CompanyRatings'

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      {/* <CompanyRatings /> */}
      {/* <Courses /> */}
      <Placement />
      <Testimonials />
    </div>
  )
}

export default Home

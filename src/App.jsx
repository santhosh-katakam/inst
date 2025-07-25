import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import CoursePage from './pages/CoursePage'
import Placement from './pages/Placement'

// Course Pages
import JavaCourse from './pages/courses/JavaCourse'
import PythonCourse from './pages/courses/PythonCourse'
import ReactCourse from './pages/courses/ReactCourse'
import JavaScriptCourse from './pages/courses/JavaScriptCourse'
import NodejsCourse from './pages/courses/NodejsCourse'
import AngularCourse from './pages/courses/AngularCourse'
import PHPCourse from './pages/courses/PHPCourse'
import HTMLCSSCourse from './pages/courses/HTMLCSSCourse'
import AndroidCourse from './pages/courses/AndroidCourse'
import MachineLearningCourse from './pages/courses/MachineLearningCourse'
import UIUXCourse from './pages/courses/UIUXCourse'
import FlutterCourse from './pages/courses/FlutterCourse'
import iOSCourse from './pages/courses/iOSCourse'
import ReactNativeCourse from './pages/courses/ReactNativeCourse'
import DataScienceCourse from './pages/courses/DataScienceCourse'
import DataAnalyticsCourse from './pages/courses/DataAnalyticsCourse'
import AICourse from './pages/courses/AICourse'
import GraphicDesignCourse from './pages/courses/GraphicDesignCourse'
import JobFest from './pages/JobFest'
import CampusDrive from './pages/CampusDrive'
import Locations from './pages/Locations'
import LocationPage from './pages/LocationPage'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import AdminPanel from './pages/AdminPanel'
import Webinars from './pages/Webinars'
import WebinarPage from './pages/WebinarPage'

function App() {
  return (
    <Router basename="/inst">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:category" element={<CoursePage />} />
          <Route path="/placement" element={<Placement />} />
          {/* Individual Course Pages */}
          <Route path="/course/java" element={<JavaCourse />} />
          <Route path="/course/python" element={<PythonCourse />} />
          <Route path="/course/react" element={<ReactCourse />} />
          <Route path="/course/javascript" element={<JavaScriptCourse />} />
          <Route path="/course/nodejs" element={<NodejsCourse />} />
          <Route path="/course/angular" element={<AngularCourse />} />
          <Route path="/course/php" element={<PHPCourse />} />
          <Route path="/course/htmlcss" element={<HTMLCSSCourse />} />
          <Route path="/course/android" element={<AndroidCourse />} />
          <Route path="/course/machine-learning" element={<MachineLearningCourse />} />
          <Route path="/course/uiux-design" element={<UIUXCourse />} />
          <Route path="/course/flutter" element={<FlutterCourse />} />
          <Route path="/course/ios" element={<iOSCourse />} />
          <Route path="/course/react-native" element={<ReactNativeCourse />} />
          <Route path="/course/data-science" element={<DataScienceCourse />} />
          <Route path="/course/data-analytics" element={<DataAnalyticsCourse />} />
          <Route path="/course/ai" element={<AICourse />} />
          <Route path="/course/graphic-design" element={<GraphicDesignCourse />} />

          <Route path="/job-fest" element={<JobFest />} />
          <Route path="/campus-drive" element={<CampusDrive />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:city" element={<LocationPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/webinars/:id" element={<WebinarPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

import { useParams } from 'react-router-dom'

const BlogPost = () => {
  const { slug } = useParams()
  
  return (
    <div className="page-container">
      <div className="page-hero">
        <div className="container">
          <h1>Blog Post</h1>
          <p>Article: {slug}</p>
        </div>
      </div>
      <div className="container">
        <div className="page-content">
          <h2>Coming Soon</h2>
          <p>Individual blog post content will be available here.</p>
        </div>
      </div>
    </div>
  )
}

export default BlogPost

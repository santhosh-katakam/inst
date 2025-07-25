import React, { useState, useEffect } from 'react';
import './AdminPanel.css';

const AdminPanel = () => {
  const [blogs, setBlogs] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBlog, setCurrentBlog] = useState({
    id: '',
    title: '',
    date: '',
    excerpt: '',
    content: '',
    author: 'RCS Team',
    readTime: '5 min read',
    image: '/blog-images/default.jpg'
  });

  // Load blogs from localStorage on component mount
  useEffect(() => {
    const savedBlogs = localStorage.getItem('rcs-blogs');
    if (savedBlogs) {
      setBlogs(JSON.parse(savedBlogs));
    } else {
      // Default blogs if none exist
      const defaultBlogs = [
        {
          id: 'java-interview-questions-2025',
          title: 'Top 20 Java Interview Questions You Must Know in 2025',
          date: 'Jun 20, 2025',
          excerpt: 'Top 20 Java Interview Questions for 2025! Master core concepts, OOP, Java updates, multithreading...',
          author: 'RCS Team',
          readTime: '8 min read',
          image: '/blog-images/java-interview.jpg',
          content: '<h2>Introduction</h2><p>Java remains one of the most popular programming languages...</p>'
        },
        {
          id: 'java-roadmap-beginners',
          title: 'Complete Java Roadmap for Beginners to Advanced',
          date: 'Jun 20, 2025',
          excerpt: 'Master Java from basics to advanced: setup, OOP, collections, multithreading, JDBC, Spring, tools...',
          author: 'RCS Team',
          readTime: '12 min read',
          image: '/blog-images/java-roadmap.jpg',
          content: '<h2>Your Complete Java Learning Journey</h2><p>Learning Java can seem overwhelming...</p>'
        },
        {
          id: 'seo-score-checker-tips',
          title: 'SEO Score Checker: Improve Your Website with Actionable Tips',
          date: 'Jun 04, 2025',
          excerpt: 'Use our SEO Score Checker to analyze your website\'s performance and discover practical tips...',
          author: 'RCS Team',
          readTime: '6 min read',
          image: '/blog-images/seo-checker.jpg',
          content: '<h2>Understanding SEO Score Checkers</h2><p>SEO score checkers are essential tools...</p>'
        }
      ];
      setBlogs(defaultBlogs);
      localStorage.setItem('rcs-blogs', JSON.stringify(defaultBlogs));
    }
  }, []);

  // Save blogs to localStorage
  const saveBlogs = (updatedBlogs) => {
    localStorage.setItem('rcs-blogs', JSON.stringify(updatedBlogs));
    setBlogs(updatedBlogs);
  };

  // Generate ID from title
  const generateId = (title) => {
    return title.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .substring(0, 50);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const blogData = {
      ...currentBlog,
      id: currentBlog.id || generateId(currentBlog.title),
      date: currentBlog.date || new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: '2-digit' 
      })
    };

    let updatedBlogs;
    if (isEditing) {
      updatedBlogs = blogs.map(blog => 
        blog.id === currentBlog.id ? blogData : blog
      );
    } else {
      updatedBlogs = [blogData, ...blogs];
    }

    saveBlogs(updatedBlogs);
    resetForm();
  };

  // Reset form
  const resetForm = () => {
    setCurrentBlog({
      id: '',
      title: '',
      date: '',
      excerpt: '',
      content: '',
      author: 'RCS Team',
      readTime: '5 min read',
      image: '/blog-images/default.jpg'
    });
    setIsEditing(false);
  };

  // Edit blog
  const editBlog = (blog) => {
    setCurrentBlog(blog);
    setIsEditing(true);
  };

  // Delete blog
  const deleteBlog = (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      const updatedBlogs = blogs.filter(blog => blog.id !== id);
      saveBlogs(updatedBlogs);
    }
  };

  return (
    <div className="admin-panel">
      <div className="container">
        <div className="admin-header">
          <h1>Blog Admin Panel</h1>
          <p>Manage your latest blogs without changing code</p>
        </div>

        <div className="admin-content">
          <div className="blog-form-section">
            <h2>{isEditing ? 'Edit Blog' : 'Add New Blog'}</h2>
            <form onSubmit={handleSubmit} className="blog-form">
              <div className="form-group">
                <label>Title *</label>
                <input
                  type="text"
                  value={currentBlog.title}
                  onChange={(e) => setCurrentBlog({...currentBlog, title: e.target.value})}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Author</label>
                  <input
                    type="text"
                    value={currentBlog.author}
                    onChange={(e) => setCurrentBlog({...currentBlog, author: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Read Time</label>
                  <input
                    type="text"
                    value={currentBlog.readTime}
                    onChange={(e) => setCurrentBlog({...currentBlog, readTime: e.target.value})}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Excerpt *</label>
                <textarea
                  value={currentBlog.excerpt}
                  onChange={(e) => setCurrentBlog({...currentBlog, excerpt: e.target.value})}
                  rows="3"
                  required
                />
              </div>

              <div className="form-group">
                <label>Content * (HTML supported)</label>
                <textarea
                  value={currentBlog.content}
                  onChange={(e) => setCurrentBlog({...currentBlog, content: e.target.value})}
                  rows="10"
                  required
                />
              </div>

              <div className="form-group">
                <label>Image URL</label>
                <input
                  type="text"
                  value={currentBlog.image}
                  onChange={(e) => setCurrentBlog({...currentBlog, image: e.target.value})}
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                  {isEditing ? 'Update Blog' : 'Add Blog'}
                </button>
                {isEditing && (
                  <button type="button" onClick={resetForm} className="btn btn-secondary">
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="blogs-list-section">
            <h2>Existing Blogs ({blogs.length})</h2>
            <div className="blogs-list">
              {blogs.map((blog) => (
                <div key={blog.id} className="blog-item">
                  <div className="blog-info">
                    <h3>{blog.title}</h3>
                    <p className="blog-meta">{blog.date} • {blog.author} • {blog.readTime}</p>
                    <p className="blog-excerpt">{blog.excerpt}</p>
                  </div>
                  <div className="blog-actions">
                    <button onClick={() => editBlog(blog)} className="btn btn-edit">
                      Edit
                    </button>
                    <button onClick={() => deleteBlog(blog.id)} className="btn btn-delete">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

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
    image: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

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
          image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop',
          content: '<h2>Introduction</h2><p>Java remains one of the most popular programming languages in the world, powering everything from enterprise applications to mobile apps. Whether you\'re preparing for your first Java interview or looking to advance your career, mastering these fundamental questions is crucial.</p><h3>Core Java Concepts</h3><p>Understanding the basics of Java is essential for any developer. Here are the key concepts you should master...</p>'
        },
        {
          id: 'java-roadmap-beginners',
          title: 'Complete Java Roadmap for Beginners to Advanced',
          date: 'Jun 20, 2025',
          excerpt: 'Master Java from basics to advanced: setup, OOP, collections, multithreading, JDBC, Spring, tools...',
          image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
          content: '<h2>Your Complete Java Learning Journey</h2><p>Learning Java can seem overwhelming, but with the right roadmap, you can master this powerful programming language step by step. This comprehensive guide will take you from absolute beginner to advanced Java developer.</p><h3>Phase 1: Java Fundamentals</h3><p>Start with the basics: variables, data types, operators, and control structures...</p>'
        },
        {
          id: 'seo-score-checker-tips',
          title: 'SEO Score Checker: Improve Your Website with Actionable Tips',
          date: 'Jun 04, 2025',
          excerpt: 'Use our SEO Score Checker to analyze your website\'s performance and discover practical tips...',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
          content: '<h2>Understanding SEO Score Checkers</h2><p>SEO score checkers are essential tools for website optimization. They analyze various aspects of your website and provide actionable insights to improve your search engine rankings.</p><h3>Key SEO Metrics</h3><p>Learn about the most important SEO metrics that affect your website\'s performance...</p>'
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
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('blogUpdated'));
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

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageDataUrl = e.target.result;
        setImagePreview(imageDataUrl);
        setCurrentBlog(prev => ({
          ...prev,
          image: imageDataUrl
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Reset form
  const resetForm = () => {
    setCurrentBlog({
      id: '',
      title: '',
      date: '',
      excerpt: '',
      content: '',
      image: ''
    });
    setImageFile(null);
    setImagePreview('');
    setIsEditing(false);
  };

  // Edit blog
  const editBlog = (blog) => {
    setCurrentBlog(blog);
    setImagePreview(blog.image || '');
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
                <label>Blog Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="image-upload"
                />
                {imagePreview && (
                  <div className="image-preview">
                    <img src={imagePreview} alt="Preview" style={{maxWidth: '200px', maxHeight: '150px', objectFit: 'cover', borderRadius: '8px', marginTop: '10px'}} />
                  </div>
                )}
                <small>Upload an image for your blog post (optional)</small>
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
                    <p className="blog-meta">{blog.date}</p>
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

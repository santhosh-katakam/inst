import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const [blogPosts, setBlogPosts] = useState({});

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    const loadBlogs = () => {
      // Load blogs from localStorage
      const savedBlogs = localStorage.getItem('rcs-blogs');
      if (savedBlogs) {
        const blogs = JSON.parse(savedBlogs);
        const blogMap = {};
        blogs.forEach(blog => {
          blogMap[blog.id] = blog;
        });
        setBlogPosts(blogMap);
      } else {
      // Default blogs if none exist
      const defaultBlogPosts = {

        'java-interview-questions-2025': {
      title: 'Top 20 Java Interview Questions You Must Know in 2025',
      date: 'Jun 20, 2025',
      author: 'RCS Team',
      readTime: '8 min read',
      image: '/blog-images/java-interview.jpg',
      content: `
        <h2>Introduction</h2>
        <p>Java remains one of the most popular programming languages in 2025, and mastering Java interview questions is crucial for landing your dream job. Whether you're a fresher or an experienced developer, these top 20 Java interview questions will help you prepare effectively.</p>

        <h2>Core Java Concepts</h2>
        <h3>1. What is Java and what are its key features?</h3>
        <p>Java is a high-level, object-oriented programming language known for its platform independence, security, and robustness. Key features include:</p>
        <ul>
          <li>Platform Independence (Write Once, Run Anywhere)</li>
          <li>Object-Oriented Programming</li>
          <li>Automatic Memory Management</li>
          <li>Strong Security Features</li>
          <li>Multithreading Support</li>
        </ul>

        <h3>2. Explain the difference between JDK, JRE, and JVM</h3>
        <p><strong>JVM (Java Virtual Machine):</strong> Runtime environment that executes Java bytecode</p>
        <p><strong>JRE (Java Runtime Environment):</strong> Provides libraries and JVM needed to run Java applications</p>
        <p><strong>JDK (Java Development Kit):</strong> Complete development kit including JRE, compiler, and development tools</p>

        <h2>Object-Oriented Programming</h2>
        <h3>3. What are the four pillars of OOP?</h3>
        <ul>
          <li><strong>Encapsulation:</strong> Bundling data and methods together</li>
          <li><strong>Inheritance:</strong> Creating new classes based on existing ones</li>
          <li><strong>Polymorphism:</strong> Same interface, different implementations</li>
          <li><strong>Abstraction:</strong> Hiding complex implementation details</li>
        </ul>

        <h2>Advanced Topics</h2>
        <h3>4. Explain multithreading in Java</h3>
        <p>Multithreading allows concurrent execution of multiple threads within a single program, improving performance and resource utilization.</p>

        <h2>Conclusion</h2>
        <p>These Java interview questions cover fundamental to advanced concepts. Practice coding examples and understand the underlying principles to excel in your interviews.</p>
      `
    },
    'java-roadmap-beginners': {
      title: 'Complete Java Roadmap for Beginners to Advanced',
      date: 'Jun 20, 2025',
      author: 'RCS Team',
      readTime: '12 min read',
      image: '/blog-images/java-roadmap.jpg',
      content: `
        <h2>Your Complete Java Learning Journey</h2>
        <p>Learning Java can seem overwhelming, but with the right roadmap, you can master it systematically. This comprehensive guide will take you from absolute beginner to advanced Java developer.</p>

        <h2>Phase 1: Java Fundamentals (Weeks 1-4)</h2>
        <h3>Setting Up Your Environment</h3>
        <ul>
          <li>Install JDK (Java Development Kit)</li>
          <li>Choose an IDE (IntelliJ IDEA, Eclipse, or VS Code)</li>
          <li>Understand Java compilation process</li>
        </ul>

        <h3>Basic Syntax and Concepts</h3>
        <ul>
          <li>Variables and Data Types</li>
          <li>Operators and Expressions</li>
          <li>Control Flow (if-else, loops)</li>
          <li>Methods and Functions</li>
          <li>Arrays and Strings</li>
        </ul>

        <h2>Phase 2: Object-Oriented Programming (Weeks 5-8)</h2>
        <ul>
          <li>Classes and Objects</li>
          <li>Constructors and Methods</li>
          <li>Inheritance and Polymorphism</li>
          <li>Encapsulation and Abstraction</li>
          <li>Interfaces and Abstract Classes</li>
        </ul>

        <h2>Phase 3: Advanced Java (Weeks 9-16)</h2>
        <h3>Collections Framework</h3>
        <ul>
          <li>List, Set, Map interfaces</li>
          <li>ArrayList, LinkedList, HashMap</li>
          <li>Iterators and Enhanced for loops</li>
        </ul>

        <h3>Exception Handling</h3>
        <ul>
          <li>Try-catch blocks</li>
          <li>Custom exceptions</li>
          <li>Best practices</li>
        </ul>

        <h2>Phase 4: Enterprise Java (Weeks 17-24)</h2>
        <ul>
          <li>JDBC for database connectivity</li>
          <li>Spring Framework basics</li>
          <li>RESTful web services</li>
          <li>Maven/Gradle build tools</li>
        </ul>

        <h2>Practice Projects</h2>
        <ol>
          <li>Calculator Application</li>
          <li>Student Management System</li>
          <li>Banking System</li>
          <li>E-commerce REST API</li>
        </ol>

        <h2>Next Steps</h2>
        <p>After completing this roadmap, consider specializing in areas like Spring Boot, microservices, or Android development. Keep practicing and building projects to solidify your knowledge.</p>
      `
    },
    'seo-score-checker-tips': {
      title: 'SEO Score Checker: Improve Your Website with Actionable Tips',
      date: 'Jun 04, 2025',
      author: 'RCS Team',
      readTime: '6 min read',
      image: '/blog-images/seo-checker.jpg',
      content: `
        <h2>Understanding SEO Score Checkers</h2>
        <p>SEO score checkers are essential tools that analyze your website's search engine optimization performance. They provide insights into how well your site is optimized for search engines and offer actionable recommendations for improvement.</p>

        <h2>Key SEO Metrics to Monitor</h2>
        <h3>Technical SEO</h3>
        <ul>
          <li><strong>Page Load Speed:</strong> Faster sites rank better</li>
          <li><strong>Mobile Responsiveness:</strong> Essential for mobile-first indexing</li>
          <li><strong>SSL Certificate:</strong> HTTPS is a ranking factor</li>
          <li><strong>XML Sitemap:</strong> Helps search engines crawl your site</li>
        </ul>

        <h3>On-Page SEO</h3>
        <ul>
          <li><strong>Title Tags:</strong> Unique and descriptive for each page</li>
          <li><strong>Meta Descriptions:</strong> Compelling summaries that encourage clicks</li>
          <li><strong>Header Tags:</strong> Proper H1, H2, H3 structure</li>
          <li><strong>Internal Linking:</strong> Connect related content</li>
        </ul>

        <h2>Content Quality Factors</h2>
        <h3>Content Optimization</h3>
        <ul>
          <li>Keyword research and implementation</li>
          <li>Content length and depth</li>
          <li>Readability and user engagement</li>
          <li>Fresh and updated content</li>
        </ul>

        <h2>Popular SEO Score Checker Tools</h2>
        <ol>
          <li><strong>Google PageSpeed Insights:</strong> Free tool for speed analysis</li>
          <li><strong>SEMrush:</strong> Comprehensive SEO audit tool</li>
          <li><strong>Ahrefs:</strong> Detailed backlink and keyword analysis</li>
          <li><strong>Moz:</strong> Domain authority and page optimization</li>
        </ol>

        <h2>Actionable SEO Improvement Tips</h2>
        <h3>Quick Wins</h3>
        <ul>
          <li>Optimize images with alt text and compression</li>
          <li>Fix broken links and 404 errors</li>
          <li>Improve page loading speed</li>
          <li>Add schema markup for rich snippets</li>
        </ul>

        <h3>Long-term Strategies</h3>
        <ul>
          <li>Create high-quality, original content regularly</li>
          <li>Build authoritative backlinks</li>
          <li>Optimize for local SEO if applicable</li>
          <li>Monitor and analyze performance metrics</li>
        </ul>

        <h2>Measuring Success</h2>
        <p>Track your SEO improvements using tools like Google Analytics and Google Search Console. Monitor organic traffic, keyword rankings, and user engagement metrics to measure the effectiveness of your optimization efforts.</p>

        <h2>Conclusion</h2>
        <p>Regular SEO audits using score checker tools are crucial for maintaining and improving your website's search engine visibility. Implement these actionable tips consistently, and you'll see gradual improvements in your SEO performance.</p>
      `
        }
      };
      setBlogPosts(defaultBlogPosts);
    }
    };

    loadBlogs();

    // Listen for blog updates from admin panel
    const handleBlogUpdate = () => {
      loadBlogs();
    };

    window.addEventListener('blogUpdated', handleBlogUpdate);

    return () => {
      window.removeEventListener('blogUpdated', handleBlogUpdate);
    };
  }, []);

  const blog = blogPosts[id];

  if (!blog) {
    return (
      <div className="blog-post-container">
        <div className="container">
          <div className="blog-not-found">
            <h1>Blog Post Not Found</h1>
            <p>The blog post you're looking for doesn't exist.</p>
            <Link to="/" className="btn btn-primary">Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-container">
      <div className="container">
        <article className="blog-post">
          <div className="blog-header">
            <Link to="/" className="back-link">← Back to Home</Link>
            <h1 className="blog-title">{blog.title}</h1>
            <div className="blog-meta">
              <span className="blog-date">{blog.date}</span>
            </div>
          </div>

          <div className="blog-image">
            <img src={blog.image} alt={blog.title} />
          </div>

          <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }} />

          <div className="blog-footer">
            <div className="blog-tags">
              <span className="tag">Java</span>
              <span className="tag">Programming</span>
              <span className="tag">Tutorial</span>
            </div>
            <div className="blog-share">
              <h4>Share this article:</h4>
              <div className="share-buttons">
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${window.location.href}`} target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost

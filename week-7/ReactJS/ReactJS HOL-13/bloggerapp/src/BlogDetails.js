import React from 'react';

const blogs = [
  { title: "Why React is Awesome", author: "Shivaguru", date: "Aug 7, 2025" },
  { title: "Hooks vs Class Components", author: "Ragavan", date: "July 20, 2025" }
];

const BlogDetails = () => {
  return (
    <div style={styles.card}>
      <h2>📝 Blog List</h2>
      {blogs.map((blog, index) => (
        <div key={index} style={styles.item}>
          <p><strong>Title:</strong> {blog.title}</p>
          <p><strong>Author:</strong> {blog.author}</p>
          <p><strong>Date:</strong> {blog.date}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

const styles = {
  card: {
    padding: '20px',
    background: '#e8faff',
    borderRadius: '8px',
    width: '60%',
    margin: '20px auto'
  },
  heading: {
    fontSize: '26px',
    marginBottom: '20px'
  },
  item: {
    fontSize: '18px',
    marginBottom: '10px',
    textAlign: 'left'
  }
};

export default BlogDetails;

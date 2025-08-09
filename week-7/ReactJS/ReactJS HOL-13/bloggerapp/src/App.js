import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [selected, setSelected] = useState('book');

  const renderComponent = () => {
    switch (selected) {
      case 'book':
        return <BookDetails />;
      case 'blog':
        return <BlogDetails />;
      case 'course':
        return <CourseDetails />;
      default:
        return <BookDetails />;
    }
  };

  const buttonStyle = {
    margin: '10px',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#3498db',
    color: '#fff',
    cursor: 'pointer'
  };

  return (
    <div style={{ textAlign: 'center', padding: '30px' }}>
      <h1>📘 Blogger App</h1>

      {/* 💡 Conditional Buttons */}
      <div>
        <button style={buttonStyle} onClick={() => setSelected('book')}>Book Details</button>
        <button style={buttonStyle} onClick={() => setSelected('blog')}>Blog Details</button>
        <button style={buttonStyle} onClick={() => setSelected('course')}>Course Details</button>
      </div>

      {/* 📦 Conditional Rendering */}
      {renderComponent()}
    </div>
  );
}

export default App;

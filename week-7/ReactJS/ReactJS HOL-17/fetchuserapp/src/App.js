import React from 'react';
import User from './User';
import Post from './Post';

function App() {
  return (
    <div style={styles.app}>
      <h1 style={styles.header}>📦 User & Post Viewer App</h1>

      <section style={styles.section}>
        <h2>👤 Random User</h2>
        <User />
      </section>

      <section style={styles.section}>
        <h2>📝 Posts</h2>
        <Post />
      </section>
    </div>
  );
}

const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f6f8',
    padding: '20px',
    minHeight: '100vh'
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    color: '#2c3e50'
  },
  section: {
    marginBottom: '50px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  }
};

export default App;

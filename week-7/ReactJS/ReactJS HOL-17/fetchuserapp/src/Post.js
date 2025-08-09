import React, { useEffect, useState } from 'react';

const Post = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 5))) 
      .catch((err) => console.error('Error fetching posts:', err));
  }, []);

  return (
    <div style={styles.container}>
      <h2>📝 Latest Posts</h2>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} style={styles.card}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    width: '80%',
    margin: '30px auto',
    textAlign: 'left',
    fontFamily: 'Arial, sans-serif'
  },
  card: {
    padding: '20px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fdfdfd',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
  }
};

export default Post;

import React from 'react';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data.slice(0, 10) }); // only 10 posts
      })
      .catch(error => {
        this.setState({ hasError: true });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("An error occurred.");
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while loading posts.</h2>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>

        {this.state.posts.map(post => (
          <div key={post.id} style={{
            padding: '15px',
            border: '1px solid #ccc',
            marginBottom: '20px',
            borderRadius: '6px',
            backgroundColor: '#f9f9f9'
          }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}

      </div>
    );
  }
}

export default Posts;

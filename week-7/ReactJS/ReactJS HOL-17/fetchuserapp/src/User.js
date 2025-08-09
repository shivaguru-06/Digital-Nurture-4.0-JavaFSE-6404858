import React, { useEffect, useState } from 'react';

const User = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://api.randomuser.me/')
      .then(res => res.json())
      .then(data => {
        const userInfo = data.results[0];
        setUser({
          title: userInfo.name.title,
          firstName: userInfo.name.first,
          image: userInfo.picture.large
        });
      })
      .catch(error => {
        console.error("Failed to fetch user:", error);
      });
  }, []);

  return (
    <div style={styles.card}>
      <h2>👤 Random User Profile</h2>
      {user ? (
        <div style={styles.info}>
          <img src={user.image} alt="user" style={styles.image} />
          <p><strong>Title:</strong> {user.title}</p>
          <p><strong>First Name:</strong> {user.firstName}</p>
        </div>
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  );
};

const styles = {
  card: {
    padding: '30px',
    margin: '30px auto',
    width: '350px',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  },
  image: {
    width: '120px',
    borderRadius: '50%',
    marginBottom: '15px'
  },
  info: {
    fontSize: '18px'
  }
};

export default User;

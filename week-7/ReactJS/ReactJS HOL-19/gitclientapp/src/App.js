import React, { useEffect, useState } from 'react';
import GitClient from './GitClient';

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    GitClient.getRepositories('techiesyed')
      .then(names => {
        setRepos(names);
      })
      .catch(err => {
        console.error(err);
        setRepos([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Git Repositories</h1>
      {loading ? (
        <p>Loading…</p>
      ) : repos.length ? (
        <ul>
          {repos.map((name, i) => (<li key={i}>{name}</li>))}
        </ul>
      ) : (
        <p>No repositories found.</p>
      )}
    </div>
  );
}

export default App;

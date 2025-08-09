const axios = require('axios');

class GitClient {
  static async getRepositories(username) {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    return response.data.map(repo => repo.name);
  }
}

module.exports = GitClient;


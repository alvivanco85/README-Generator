const axios = require('axios');

const api = {
  getUser(result) {
    return axios.get(`https://api.github.com/users/${result.gitName}`);
  }
};

module.exports = api;
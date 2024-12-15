import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';

const fetchAdvancedSearchResults = async ({ username, location, minRepos }) => {
  let query = '';
  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(`${GITHUB_API_BASE_URL}/search/users?q=${query}`);
  return response.data;
};

export { fetchAdvancedSearchResults };

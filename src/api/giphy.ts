import axios from 'axios';

const apiKey = '2aI7FzfhCawbIZNz53GptEmdQI2eoqWd';

const api = axios.create({
  baseURL: 'https://api.giphy.com/v1',
});

export const getTrendingGifs = () =>
  api.get('/gifs/trending', {
    params: {
      api_key: apiKey,
      limit: 100,
    },
  });

export const searchGifs = (term: string) =>
  api.get('/gifs/search', {
    params: {
      api_key: apiKey,
      q: term,
      limit: 100,
    },
  });

export const getCategories = () =>
  api.get('/gifs/categories', {
    params: {
      api_key: apiKey,
    },
  });

export const getByCategory = (term: string) =>
  api.get('/gifs/search', {
    params: {
      api_key: apiKey,
      q: term,
      limit: 100,
    },
  });

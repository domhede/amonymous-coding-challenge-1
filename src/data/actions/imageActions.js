// import axios from 'axios';

import { FETCH_IMAGES, FILTER_IMAGES } from 'constants/actionTypes'

const BASE_URL = 'http://api.giphy.com/';
const API_KEY = 'FwoVvfU4Yr5gqvctz6qhp7StSfWs6guc';

export const fetchImages = () => {
  return dispatch => {
    return axios.get(`${BASE_URL}v1/gifs/search?q=trending&api_key=${API_KEY}&limit=${limit}`)
      .then(response => {
        dispatch({
          type: FETCH_IMAGES,
          payload: response.data
        });
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const filterImages = searchTerm => ({
  type: FILTER_IMAGES,
  payload: {searchTerm}
});

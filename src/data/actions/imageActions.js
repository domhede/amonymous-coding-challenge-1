import axios from 'axios';

import { FETCH_IMAGES_START, FETCH_IMAGES_SUCCESS, FILTER_IMAGES } from 'constants/actionTypes'

const BASE_URL = 'http://api.giphy.com/';
const API_KEY = 'FwoVvfU4Yr5gqvctz6qhp7StSfWs6guc';

const fetchImagesStart = () => ({
  type: FETCH_IMAGES_START,
});

const fetchImagesSuccess = images => ({
  type: FETCH_IMAGES_SUCCESS,
  payload: images
});

export const fetchImages = () => (dispatch) => {
  dispatch(fetchImagesStart());
  const limit = 3;
  const url = `${BASE_URL}v1/gifs/search?q=trending&api_key=${API_KEY}&limit=${limit}`;

  return axios({
    url,
    method: 'get',
  })
    .then(res => {
      dispatch(fetchImagesSuccess(res.data));
      return res;
    })
    .catch(error => {
      throw(error);
    });
};

export const filterImages = searchTerm => ({
  type: FILTER_IMAGES,
  payload: {searchTerm}
});

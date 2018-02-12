import axios from 'axios';

import {
  FETCH_IMAGES_START,
  FETCH_IMAGES_SUCCESS,
  FILTER_IMAGES,
  FETCH_MORE_IMAGES_START,
  FETCH_MORE_IMAGES_SUCCESS
} from 'constants/actionTypes';

const BASE_URL = 'http://api.giphy.com/';
const API_KEY = 'FwoVvfU4Yr5gqvctz6qhp7StSfWs6guc';

const fetchImagesStart = () => ({
  type: FETCH_IMAGES_START,
});

const fetchImagesSuccess = images => ({
  type: FETCH_IMAGES_SUCCESS,
  payload: images
});

const fetchMoreImagesStart = () => ({
  type: FETCH_MORE_IMAGES_START,
});

const fetchMoreImagesSuccess = images => ({
  type: FETCH_MORE_IMAGES_SUCCESS,
  payload: images
});

export const fetchImages = () => (dispatch) => {
  dispatch(fetchImagesStart());
  const limit = 20;
  const url = `${BASE_URL}v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&rating=g`;

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
export const fetchMoreImages = (offset) => (dispatch) => {
  dispatch(fetchMoreImagesStart());
  const limit = 20;
  const url = `${BASE_URL}v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&rating=g&offset=${offset}`;

  return axios({
    url,
    method: 'get',
  })
    .then(res => {
      dispatch(fetchMoreImagesSuccess(res.data));
      window.scroll(0, window.pageYOffset + (window.pageYOffset/2));
      return res;
    })
    .catch(error => {
      throw(error);
    });

}
export const filterImages = searchTerm => ({
  type: FILTER_IMAGES,
  payload: {searchTerm}
});

import * as api from '../../api';

import {
  ADD_NEWSLETTER,
  GET_ALL_POSTS,
  CLEAR_NEWSLETTER,
  GET_POST_BY_ID, CLEAR_POST_ID,
  SEND_MESSAGE
} from '../types'

/*///////////////////////////
        POSTS
///////////////////////////*/

export const getAllPosts = (prevState, page, order, limit) => {
  const response = api.getPostsApi(prevState, page, order, limit);

  return {
    type: GET_ALL_POSTS,
    payload: response
  }
}

export const getPostById = (id) => ({
  type: GET_POST_BY_ID,
  payload: api.getPostByIdApi(id)
});

export const clearPostId = () => ({
  type: CLEAR_POST_ID,
  payload: {}
});

/*///////////////////////////
        USER
///////////////////////////*/

export const addNewsLetter = (data) => ({
  type: ADD_NEWSLETTER,
  payload: api.addNewsLetterApi(data)
});

export const clearNewsLetter = () => ({
  type: CLEAR_NEWSLETTER,
  payload: {
    newsletter: false,
    email: []
  }
});

export const sendMessage = (data) => ({
  type: SEND_MESSAGE,
  payload: api.sendMessageApi(data)
});
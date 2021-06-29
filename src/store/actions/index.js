import * as api from '../../api';

import { ADD_NEWSLETTER, GET_ALL_POSTS } from '../types'

/*///////////////////////////
        POSTS
///////////////////////////*/

export const getAllPosts = (prevState, page, order, limit) => {
  const response = api.getPosts(prevState, page, order, limit);

  return { 
    type: GET_ALL_POSTS, 
    payload: response 
  }
}

/*///////////////////////////
        USER
///////////////////////////*/

export const addNewsLetter = (data) => ({
  type: ADD_NEWSLETTER,
  payload: api.addNewsLetter(data)
});
import * as api from '../../api';

import { GET_ALL_POSTS } from '../types'


export const getAllPosts = (prevState, page, order, limit) => {
  const response = api.getPosts(prevState, page, order, limit);

  return { 
    type: GET_ALL_POSTS, payload: response 
  }
}
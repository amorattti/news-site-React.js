import * as api from '../../api';

import { GET_ALL_POSTS } from '../types'


export const getAllPosts = () => {
  const response = api.getPosts();

  return { 
    type: GET_ALL_POSTS, payload: response 
  }
}
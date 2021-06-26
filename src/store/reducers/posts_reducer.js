import { GET_ALL_POSTS } from '../types';

const posts = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return { ...state, ...action.payload}
    default:
      return state;
  }
}

export default posts;
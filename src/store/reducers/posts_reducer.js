import { CLEAR_POST_ID, GET_ALL_POSTS, GET_POST_BY_ID } from '../types';

const posts = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return { ...state, ...action.payload }
    case GET_POST_BY_ID:
      return { ...state, postById: action.payload }
    case CLEAR_POST_ID:
      return { ...state, postById: action.payload }
    default:
      return state;
  }
}

export default posts;
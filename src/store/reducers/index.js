import { combineReducers } from 'redux';

import user from './user_reducer';
import posts from './posts_reducer';

const reducers = combineReducers({
  user, posts
})

export default reducers;
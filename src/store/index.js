import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers/index.js'

const reduxStore = () => {
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const middlewares = [
    promiseMiddleware
  ];

  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return store;
}

export default reduxStore;

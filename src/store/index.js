import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers/index.js'


const reduxStore = () => {
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(promiseMiddleware))
  );

  return store;
}

export default reduxStore;

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import petReducer from './reducers/index.reducer';

const store = createStore(
  petReducer,
  applyMiddleware(thunk)
);

export default store;
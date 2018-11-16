import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//import petReducer from './reducers/index.reducer';

import catReducer from './reducers/cat.reducer';
import dogReducer from './reducers/dog.reducer';

const store = createStore(
  combineReducers({
    cat: catReducer,
    dog: dogReducer
  }),
  applyMiddleware(thunk)
);

export default store;

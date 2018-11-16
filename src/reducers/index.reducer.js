import catReducer from './cat.reducer';
import dogReducer from './dog.reducer';
import {combineReducers} from 'redux';

const petReducer = combineReducers({
  cat: catReducer,
  dog: dogReducer,
});

export default petReducer;

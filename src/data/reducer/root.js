import { combineReducers } from 'redux';

import todos from './todo';
import filter from './filter';
import query from './query';
import loading from './loading';

const reducer = combineReducers({
  todos,
  filter,
  loading,
  query,
});

export default reducer;

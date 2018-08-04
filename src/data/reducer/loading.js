import TodoInitialState from '../TodoInitialState';
import TodoActionTypes from '../TodoActionTypes';

const loading = function(state = TodoInitialState._LOADING, action) {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS_START: {
      return true;
    }
    case TodoActionTypes.FETCH_TODOS_ERROR:
    case TodoActionTypes.FETCH_TODOS_COMPLETE: {
      return false;
    }
    default: {
      return state;
    }
  }
};

export default loading;

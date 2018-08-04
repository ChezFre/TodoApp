import TodoInitialState from '../TodoInitialState';
import TodoActionTypes from '../TodoActionTypes';

const loading = function(state = TodoInitialState.loading, action) {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS_PENDING: {
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

import TodoInitialState from '../TodoInitialState';
import TodoActionTypes from '../TodoActionTypes';

const query = function(state = TodoInitialState.query, action) {
  switch (action.type) {
    case TodoActionTypes.QUERY_TODOS: {
      return action.query;
    }
    default: {
      return state;
    }
  }
};

export default query;

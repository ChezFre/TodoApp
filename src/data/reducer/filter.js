import TodoInitialState from '../TodoInitialState';
import TodoActionTypes from '../TodoActionTypes';

const filter = function(state = TodoInitialState.filter, action) {
  switch (action.type) {
    case TodoActionTypes.TOGGLE_COMPLETED_VISIBILITY: {
      return state === 'FILTER_COMPLETED' ? '' : 'FILTER_COMPLETED';
    }
    default:
      return state;
  }
};

export default filter;

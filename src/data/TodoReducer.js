import uuid from 'uuid';
import { combineReducers } from 'redux';

import TodoInitialState from './TodoInitialState';
import TodoActionTypes from './TodoActionTypes';

const todos = function(state = TodoInitialState.todos, action) {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO: {
      const newTodo = {
        id: uuid.v4(),
        title: action.text,
        completed: false,
        toDelete: false,
        editing: false,
      };
      return state.concat(newTodo);
    }
    case TodoActionTypes.DELETE_TODO: {
      return state;
    }
    case TodoActionTypes.UPDATE_TODO: {
      return state;
    }
    default:
      return state;
  }
};

const reducers = combineReducers({
  todos,
});

export default reducers;

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
    case TodoActionTypes.TOGGLE_COMPLETED: {
      const index = state.findIndex(todo => todo.id === action.id);
      const clone = {
        ...state[index],
        completed: !state[index].completed,
      };
      return [...state.slice(0, index), clone, ...state.slice(index + 1)];
    }
    case TodoActionTypes.DELETE_TODO: {
      return state.filter(todo => todo.id !== action.id);
    }
    case TodoActionTypes.UPDATE_TODO: {
      const index = state.findIndex(todo => todo.id === action.id);
      const clone = {
        ...state[index],
        title: action.text,
        editing: false,
      };
      return [...state.slice(0, index), clone, ...state.slice(index + 1)];
    }
    case TodoActionTypes.FETCH_TODOS_COMPLETE: {
      const todos = action.todos.map((person, i) => ({
        id: uuid.v4(),
        completed: false,
        editing: false,
        title: `${person.first_name} ${person.last_name}`,
      }));

      return state.concat(todos);
    }
    case TodoActionTypes.TOGGLE_DELETE: {
      const index = state.findIndex(todo => todo.id === action.id);
      const clone = {
        ...state[index],
        toDelete: !state[index].toDelete,
      };
      return [...state.slice(0, index), clone, ...state.slice(index + 1)];
    }
    case TodoActionTypes.TOGGLE_EDIT: {
      const index = state.findIndex(todo => todo.id === action.id);
      const clone = {
        ...state[index],
        editing: !state[index].editing,
      };
      return [...state.slice(0, index), clone, ...state.slice(index + 1)];
    }
    default:
      return state;
  }
};

const filter = function(state = TodoInitialState.filter, action) {
  switch (action.type) {
    case TodoActionTypes.TOGGLE_COMPLETED_VISIBILITY: {
      return state === 'FILTER_COMPLETED' ? '' : 'FILTER_COMPLETED';
    }
    default:
      return state;
  }
};

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

const reducers = combineReducers({
  todos,
  filter,
  loading,
  query,
});

export default reducers;

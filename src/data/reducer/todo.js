import uuid from 'uuid';
import TodoInitialState from '../TodoInitialState';
import TodoActionTypes from '../TodoActionTypes';

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
        toDelete: false,
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
    case TodoActionTypes.MOVE_TODO: {
      const { fromIndex, toIndex } = action;

      const todos = [
        ...state.slice(0, fromIndex),
        ...state.slice(fromIndex + 1),
      ];

      todos.splice(toIndex, 0, state[fromIndex]);

      return todos;
    }
    default:
      return state;
  }
};

export default todos;

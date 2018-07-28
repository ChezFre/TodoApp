import TodoActionTypes from './TodoActionTypes';

export function addTodo(text) {
  return {
    type: TodoActionTypes.ADD_TODO,
    text,
  };
}

export function toggleCompleted(id) {
  return {
    type: TodoActionTypes.TOGGLE_COMPLETED,
    id,
  };
}

export function setNewTodoText(text, id) {
  return {
    type: TodoActionTypes.SET_NEW_TODO_TEXT,
    text,
    id,
  };
}

export function toggleDelete(id) {
  return {
    type: TodoActionTypes.TOGGLE_DELETE,
    id,
  };
}

export function deleteTodo(id) {
  return {
    type: TodoActionTypes.DELETE_TODO,
    id,
  };
}
export function toggleEdit(id) {
  return {
    type: TodoActionTypes.TOGGLE_EDIT,
    id,
  };
}

export function updateTodo(id, text) {
  return {
    type: TodoActionTypes.UPDATE_TODO,
    id,
    text,
  };
}

export function toggleCompletedVisibility() {
  return {
    type: TodoActionTypes.TOGGLE_COMPLETED_VISIBILITY,
  };
}

export function fetchTodos() {
  return {
    type: TodoActionTypes.FETCH_TODOS_START,
  };
}

export function fetchTodosError(error) {
  return {
    type: TodoActionTypes.FETCH_TODOS_ERROR,
    payload: error,
  };
}

export function fetchTodosComplete(todos) {
  return {
    type: TodoActionTypes.FETCH_TODOS_COMPLETE,
    todos,
  };
}

export function queryTodos(query) {
  return {
    type: TodoActionTypes.QUERY_TODOS,
    query,
  };
}

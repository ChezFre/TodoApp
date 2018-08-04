import { connect } from 'react-redux';
import TodosListFooter from './TodosListFooter';
import {
  fetchTodos,
  toggleCompletedVisibility,
  fetchTodosComplete,
  fetchTodosError,
} from '../data/TodoActions';

const mapStateToProps = state => ({
  nrOfTodos: state.todos.length,
  completedTodos: state.todos.filter(todo => todo.completed).length,
  filter: state.filter,
  loading: state._LOADING,
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => {
    dispatch(fetchTodos());
    fetch('https://reqres.in/api/users?page=2')
      .then(result => result.json())
      .then(result => dispatch(fetchTodosComplete(result.data)))
      .catch(error => fetchTodosError(error));
  },
  toggleCompletedVisibility: () => {
    dispatch(toggleCompletedVisibility());
  },
});

const TodoListFooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodosListFooter);

export default TodoListFooterContainer;

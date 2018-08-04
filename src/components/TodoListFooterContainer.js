import { connect } from 'react-redux';
import TodosListFooter from './TodosListFooter';
import { fetchTodos, toggleCompletedVisibility } from '../data/TodoActions';

const mapStateToProps = state => ({
  nrOfTodos: state.todos.length,
  completedTodos: state.todos.filter(todo => todo.completed).length,
  filter: state.filter,
  loading: state.loading,
});

const mapDispatchToProps = {
  fetchTodos,
  toggleCompletedVisibility,
};

const TodoListFooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodosListFooter);

export default TodoListFooterContainer;

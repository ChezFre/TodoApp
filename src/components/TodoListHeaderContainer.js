import { connect } from 'react-redux';
import TodoListHeader from './TodoListHeader';
import { queryTodos } from '../data/TodoActions';

const mapStateToProps = state => ({
  query: state.query,
});

const mapDispatchToProps = {
  queryTodos,
};

const TodoListHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoListHeader);

export default TodoListHeaderContainer;

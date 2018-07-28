import { connect } from 'react-redux';
import TodoListHeader from './TodoListHeader';
import { queryTodos } from '../data/TodoActions';

const mapStateToProps = state => ({
  query: state.query,
});

const mapDispatchToProps = dispatch => ({
  queryTodos: text => {
    dispatch(queryTodos(text));
  },
});

const TodoListHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoListHeader);

export default TodoListHeaderContainer;

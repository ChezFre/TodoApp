import { connect } from 'react-redux';
import TodoListAdd from './TodoListAdd';
import { addTodo } from '../data/TodoActions';

const mapDispatchToProps = dispatch => ({
  addTodo: text => {
    dispatch(addTodo(text));
  },
});

const TodoListAddContainer = connect(
  () => ({}),
  mapDispatchToProps,
)(TodoListAdd);

export default TodoListAddContainer;

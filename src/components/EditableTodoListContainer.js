import TodoList from './TodoList';
import { connect } from 'react-redux';

import {
  toggleDelete,
  toggleCompleted,
  deleteTodo,
  toggleEdit,
  updateTodo,
} from '../data/TodoActions';

const mergeStateToProps = state => ({
  todos: state.todos
    .filter(
      ({ completed }) => !(state.filter === 'FILTER_COMPLETED' && completed),
    )
    .filter(({ title }) =>
      title.toLowerCase().includes(state.query.toLowerCase()),
    ),
  filter: state.filter,
});

const mergeDispatchToProps = {
  toggleDelete,
  toggleCompleted,
  deleteTodo,
  toggleEdit,
  updateTodo,
};

const EditableTodoListContainer = connect(
  mergeStateToProps,
  mergeDispatchToProps,
)(TodoList);

export default EditableTodoListContainer;

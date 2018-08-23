import TodoList from './TodoList';
import { connect } from 'react-redux';

import {
  toggleDelete,
  toggleCompleted,
  deleteTodo,
  toggleEdit,
  updateTodo,
  moveTodo,
} from '../data/TodoActions';

const mapeStateToProps = state => ({
  todos: state.todos
    .filter(
      ({ completed }) => !(state.filter === 'FILTER_COMPLETED' && completed),
    )
    .filter(({ title }) =>
      title.toLowerCase().includes(state.query.toLowerCase()),
    ),
  filter: state.filter,
});

const mapeDispatchToProps = {
  toggleDelete,
  toggleCompleted,
  deleteTodo,
  toggleEdit,
  updateTodo,
  moveTodo,
};

const EditableTodoListContainer = connect(
  mapeStateToProps,
  mapeDispatchToProps,
)(TodoList);

export default EditableTodoListContainer;

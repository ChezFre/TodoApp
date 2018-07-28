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
});

const mergeDispatchToProps = dispatch => ({
  toggleDelete: id => {
    dispatch(toggleDelete(id));
  },
  toggleCompleted: id => {
    dispatch(toggleCompleted(id));
  },
  deleteTodo: id => {
    dispatch(deleteTodo(id));
  },
  toggleEdit: id => {
    dispatch(toggleEdit(id));
  },
  updateTodo: (id, text) => {
    dispatch(updateTodo(id, text));
  },
});

const EditableTodoListContainer = connect(
  mergeStateToProps,
  mergeDispatchToProps,
)(TodoList);

export default EditableTodoListContainer;

//     getTodos() {

//         if( this.state.todos.length === 0 ) {
//             return <div className="no-todos">You don't have any Todos yet.</div>
//         } else if( this.state.todos.filter( todo => todo.completed === false ) === 0 && this.state.filter === 'FILTER_COMPLETED' ) {
//             return <div className="no-todos">You have completed all your Todos.</div>
//         }
// }

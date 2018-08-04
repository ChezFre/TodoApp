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

//     getTodos() {

//         if( this.state.todos.length === 0 ) {
//             return <div className="no-todos">You don't have any Todos yet.</div>
//         } else if( this.state.todos.filter( todo => todo.completed === false ) === 0 && this.state.filter === 'FILTER_COMPLETED' ) {
//             return <div className="no-todos">You have completed all your Todos.</div>
//         }
// }

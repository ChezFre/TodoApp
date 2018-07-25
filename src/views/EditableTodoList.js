import TodoList from './TodoList';
import { connect } from 'react-redux';

// export class EditableTodoList extends Component {
//     constructor() {
//         super();

//         this.state = TodoStore.getAll();
//     }

//     componentWillMount() {
//         TodoStore.on('change', this.fetchStore);
//     }

//     componentWillUnmount() {
//         TodoStore.removeListener('change', this.fetchStore);
//     }

//     fetchStore = () => {
//         this.setState( TodoStore.getAll() );
//     }

//     toggleCompleted = (index) => {
//         TodoActions.toggleCompleted(index);
//     };

//     toggleEdit = (index) => {
//         TodoActions.toggleEdit(index);
//     };

//     updateTodo = (index, value) => {
//         TodoActions.updateTodo(index, value);
//     };

//     toggleDelete = (index) => {
//         TodoActions.toggleDelete(index);
//     };

//     deleteTodo = (index) => {
//         TodoActions.deleteTodo(index);
//     };

//     onInputChange = (e) => {
//         TodoActions.setNewTodoText(e.target.value);
//     };

//     addTodo = () => {
//         TodoActions.addTodo( this.state.newValue )
//     };

//     getTodos() {

//         if( this.state.todos.length === 0 ) {
//             return <div className="no-todos">You don't have any Todos yet.</div>
//         } else if( this.state.todos.filter( todo => todo.completed === false ) === 0 && this.state.filter === 'FILTER_COMPLETED' ) {
//             return <div className="no-todos">You have completed all your Todos.</div>
//         }

//         let todos = this.state.todos;

//         if( this.state.filter === 'FILTER_COMPLETED' ) {
//             todos = todos.filter( todo => todo.completed === false );
//         }

//         todos = todos.map( ({ index, title, completed, toDelete, editing }) => {

//             let classList = [];

//             completed && classList.push('completed');
//             editing && classList.push('editing');

//             return (
//                 <li key={index} className={  classList.join(' ') }>
//                 { toDelete ? (
//                     <div className="delete-confirmation">Are you sure you want to delete this todo? <button className="delete-confirm" onMouseUp={ () => this.deleteTodo(index) }>Delete</button> or <button className="cancel" onMouseUp={ () => this.toggleDelete(index) }>cancel</button>.</div>
//                 ) : (
//                     <EditableTodo
//                         editing={editing}
//                         index={index}
//                         title={title}
//                         completed={completed}
//                         updateTodo={this.updateTodo}
//                         toggleEdit={this.toggleEdit}
//                         toggleDelete={this.toggleDelete}
//                         toggleCompleted={this.toggleCompleted}
//                     />
//                 )}
//                 </li>
//             );
//         });

//         return (
//             <ul className="todos">
//                 {todos}
//             </ul>
//         );
//     };

//     toggleCompletedVisibility = () => {
//         TodoActions.toggleCompletedVisibility();
//     };

//     fetchTodos() {
//         TodoActions.fetchTodos();
//     }

//     render() {
//         return (
//             <div className="App">

//                 <header>
//                     <h1>Todos</h1>
//                     <input type="search" placeholder="Search…" className="search-field" />
//                 </header>

//                 <div className="add-form">
//                     <input type="text" onChange={this.onInputChange} value={this.state.newValue} placeholder="New Todo…" />
//                     <button type="submit" onClick={this.addTodo} disabled={this.state.newValue.trim().length === 0}>Add Todo</button>
//                 </div>

//                 {this.getTodos()}

//                 { this.state.todos.length > 0 &&
//                     <footer>
//                         {this.state.todos.length} To-Dos &#8212;
//                         {this.state.todos.filter(todo => todo.completed === true).length} Completed &#8212;
//                         <label><input type="checkbox" checked={this.state.filter === "FILTER_COMPLETED" } onChange={() => this.toggleCompletedVisibility()} /> Hide completed</label> &#8212;
//                         <button onClick={this.fetchTodos} className={ [ 'fetch', (this.state._LOADING ? 'loading' : '') ].join(' ') } disabled={this.state._LOADING}>Fetch</button>
//                     </footer>
//                 }
//             </div>
//         );
//     }
// }

const mergeStateToProps = state => ({
  todos: state.todos,
});

const mergeDispatchToProps = dispatch => ({});

const EditableTodoList = connect(
  mergeStateToProps,
  mergeDispatchToProps,
)(TodoList);

export default EditableTodoList;

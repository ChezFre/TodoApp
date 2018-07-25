import { createStore } from 'redux';
import reducer from './TodoReducer';

// let state = todoInitialState;

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;

// class TodoStore extends EventEmitter {
//   getAll() {
//     return state;
//   }

//   saveState() {
//     localStorage.setItem("todos", JSON.stringify(state));
//   }

//   handleAction = action => {
//     switch (action.type) {
//       case TodoActionTypes.ADD_TODO:
//         state = {
//           ...state,
//           newValue: "",
//           todos: [
//             ...state.todos,
//             {
//               index: state.todos.reduce(
//                 (acc, { index }) => Math.max(acc, index) + 1,
//                 0
//               ),
//               title: action.payload,
//               completed: false,
//               toDelete: false,
//               editing: false
//             }
//           ]
//         };
//         break;
//       case TodoActionTypes.SET_NEW_TODO_TEXT:
//         state = {
//           ...state,
//           newValue: action.payload
//         };
//         break;
//       case TodoActionTypes.DELETE_TODO:
//         state = {
//           ...state,
//           todos: state.todos.filter(todo => todo.index !== action.payload)
//         };
//         break;
//       case TodoActionTypes.TOGGLE_DELETE:
//         state = {
//           ...state,
//           todos: state.todos.map(todo => {
//             if (todo.index === action.payload) {
//               return {
//                 ...todo,
//                 toDelete: !todo.toDelete
//               };
//             }

//             return todo;
//           })
//         };
//         break;
//       case TodoActionTypes.TOGGLE_EDIT:
//         state = {
//           ...state,
//           todos: state.todos.map(todo => {
//             if (todo.index === action.payload) {
//               return {
//                 ...todo,
//                 editing: !todo.editing
//               };
//             }

//             return todo;
//           })
//         };
//         break;
//       case TodoActionTypes.TOGGLE_COMPLETED:
//         state = {
//           ...state,
//           todos: state.todos.map(todo => {
//             if (todo.index === action.payload) {
//               return {
//                 ...todo,
//                 completed: !todo.completed
//               };
//             }

//             return todo;
//           })
//         };
//         break;
//       case TodoActionTypes.UPDATE_TODO:
//         state = {
//           ...state,
//           todos: state.todos.map(todo => {
//             if (todo.index === action.payload.index) {
//               return {
//                 ...todo,
//                 title: action.payload.text,
//                 editing: false
//               };
//             }

//             return todo;
//           })
//         };
//         break;
//       case TodoActionTypes.TOGGLE_COMPLETED_VISIBILITY:
//         state = {
//           ...state,
//           filter: state.filter === "FILTER_COMPLETED" ? "" : "FILTER_COMPLETED"
//         };
//         break;
//       case TodoActionTypes.FETCH_TODOS_START:
//         state = {
//           ...state,
//           _LOADING: true
//         };
//         break;
//       case TodoActionTypes.FETCH_TODOS_COMPLETE:
//         let newTodos = action.payload.map((person, i) => ({
//           index: state.todos.reduce(
//             (acc, { index }) => Math.max(acc, index) + i + 1,
//             0
//           ),
//           completed: false,
//           editing: false,
//           title: `${person.first_name} ${person.last_name}`
//         }));

//         state = {
//           ...state,
//           _LOADING: false,
//           todos: state.todos.concat(newTodos)
//         };
//         break;
//       case TodoActionTypes.FETCH_TODOS_ERROR:
//         state = {
//           ...state,
//           _LOADING: false
//         };
//         break;
//       case TodoActionTypes.FILTER:
//         state = {
//           ...state,
//           query: action.payload
//         };
//         break;
//       default:
//         break;
//     }

//     this.saveState();

//     this.emit("change");
//   };
// }

// const todoStore = new TodoStore();

// TodoDispatcher.register(todoStore.handleAction);

// export default todoStore;

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

//       default:
//         break;
//     }

// }

// const todoStore = new TodoStore();

// TodoDispatcher.register(todoStore.handleAction);

// export default todoStore;

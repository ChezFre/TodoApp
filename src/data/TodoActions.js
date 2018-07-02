import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

export function addTodo(text) {
    TodoDispatcher.dispatch({
        type: TodoActionTypes.ADD_TODO,
        payload: text
    })
}

export function toggleCompleted(index) {
    TodoDispatcher.dispatch({
        type: TodoActionTypes.TOGGLE_COMPLETED,
        payload: index
    })
}

export function setNewTodoText(text) {
    TodoDispatcher.dispatch({
        type: TodoActionTypes.SET_NEW_TODO_TEXT,
        payload: text
    })
}

export function toggleDelete(index) {
    TodoDispatcher.dispatch({
        type: TodoActionTypes.TOGGLE_DELETE,
        payload: index
    });
}

export function deleteTodo(index) {
    TodoDispatcher.dispatch({
        type: TodoActionTypes.DELETE_TODO,
        payload: index
    })
}
export function toggleEdit(index) {
    TodoDispatcher.dispatch({
        type: TodoActionTypes.TOGGLE_EDIT,
        payload: index
    })
}

export function updateTodo(index, text) {
    TodoDispatcher.dispatch({
        type: TodoActionTypes.UPDATE_TODO,
        payload: {
            index,
            text
        }
    })
}

export function toggleCompletedVisibility() {
    TodoDispatcher.dispatch({
        type: TodoActionTypes.TOGGLE_COMPLETED_VISIBILITY,
    });
}

export function fetchTodos() {

    TodoDispatcher.dispatch({
        type: TodoActionTypes.FETCH_TODOS_START
    });

    fetch('https://reqres.in/api/users?page=2')
        .then( ( res ) => res.json() )
        .then( ( res ) => {

            TodoDispatcher.dispatch({
                type: TodoActionTypes.FETCH_TODOS_COMPLETE,
                payload: res.data
            });

        } )
        .catch( err => {

            TodoDispatcher.dispatch({
                type: TodoActionTypes.FETCH_TODOS_ERROR
            })

        });

}
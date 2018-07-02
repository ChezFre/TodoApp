let todoInitialState = {
    newValue: '',
    filter: '',
    todos: [
    ],
    _LOADING: false
};

let savedState = localStorage.getItem('todos');

if( savedState !== null ) {
    try {
        todoInitialState = JSON.parse(savedState);
    } catch(e) {
        alert('Error fetching existing state, reverting to initial state');
        localStorage.setItem('todos', JSON.stringify(todoInitialState));
    }
}

export default todoInitialState;
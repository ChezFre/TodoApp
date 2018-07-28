import React from 'react';
import './App.css';

import TodoListHeaderContainer from './views/TodoListHeaderContainer';
import EditableTodoListContainer from './views/EditableTodoListContainer';
import TodosListFooterContainer from './views/TodoListFooterContainer';
import TodoListAddContainer from './views/TodoListAddContainer';
const App = () => {
  return (
    <div className="App">
      <TodoListHeaderContainer />
      <TodoListAddContainer />
      <EditableTodoListContainer />
      <TodosListFooterContainer />
    </div>
  );
};

export default App;

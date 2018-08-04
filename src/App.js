import React from 'react';

import './App.css';
import TodoListHeaderContainer from './components/TodoListHeaderContainer';
import EditableTodoListContainer from './components/EditableTodoListContainer';
import TodosListFooterContainer from './components/TodoListFooterContainer';
import TodoListAddContainer from './components/TodoListAddContainer';

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

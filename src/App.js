import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

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

export default DragDropContext(HTML5Backend)(App);

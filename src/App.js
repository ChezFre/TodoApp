import React, { Component } from 'react';
import './App.css';

import { EditableTodoList } from './views/EditableTodoList';

class App extends Component {
  state = {
    todos: true
  };

  toggleTodos = () => {
    this.setState({
      todos: !this.state.todos
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleTodos}>Toggle todo mount</button>
        { this.state.todos && <EditableTodoList /> }
      </div>
    )
  }  
}

export default App;
import React from 'react';
import Todo from './Todo';
import TodoEditForm from './TodoEditForm';

export default class TodoList extends React.Component {
  render() {
    const todos = this.props.todos.map(
      ({ id, title, completed, editing, toDelete }) =>
        editing === false ? (
          <Todo
            id={id}
            key={id}
            title={title}
            toDelete={toDelete}
            completed={completed}
            deleteTodo={this.props.deleteTodo}
            toggleDelete={this.props.toggleDelete}
            toggleEdit={this.props.toggleEdit}
            toggleCompleted={this.props.toggleCompleted}
          />
        ) : (
          <TodoEditForm
            key={id}
            id={id}
            title={title}
            toggleEdit={this.props.toggleEdit}
            updateTodo={this.props.updateTodo}
          />
        ),
    );

    return <ul className="todos">{todos}</ul>;
  }
}

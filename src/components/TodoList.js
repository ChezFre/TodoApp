import React from 'react';
import Todo from './Todo';
import TodoEditForm from './TodoEditForm';
import classNames from 'classnames';

export default class TodoList extends React.Component {
  render() {
    const todos = this.props.todos.map(
      ({ id, title, completed, editing, toDelete }) => (
        <li
          className={classNames({
            todo: true,
            'delete-confirmation': toDelete,
            editing: editing,
          })}
        >
          {editing === false ? (
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
          )}
        </li>
      ),
    );

    return <ul className="todos">{todos}</ul>;
  }
}

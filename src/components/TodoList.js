import React from 'react';
import Todo from './Todo';
import TodoEditForm from './TodoEditForm';
import classNames from 'classnames';

export default class TodoList extends React.Component {
  render() {
    if (
      this.props.todos.length === 0 &&
      this.props.filter === 'FILTER_COMPLETED'
    ) {
      return <div className="no-todos">You have completed all your Todos.</div>;
    } else if (this.props.todos.length === 0) {
      return <div className="no-todos">You don't have any Todos yet.</div>;
    } else {
      const todos = this.props.todos.map(
        ({ id, title, completed, editing, toDelete }) => (
          <li
            key={id}
            className={classNames({
              todo: true,
              'delete-confirmation': toDelete,
              editing: editing,
            })}
          >
            {editing === false ? (
              <Todo
                id={id}
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
}

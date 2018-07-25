import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    const todos = this.props.todos.map(
      ({ index, title, completed, editing }) =>
        editing === false ? (
          <Todo index={index} title={title} completed={completed} />
        ) : (
          <Todo
            index={index}
            title={`Editing ${editing}`}
            completed={completed}
          />
        ),
    );

    return <ul className="todos">{todos}</ul>;
  }
}

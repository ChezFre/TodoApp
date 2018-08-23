import React from 'react';
import Todo from './Todo';
import TodoEditForm from './TodoEditForm';
import classNames from 'classnames';
import { Trail, animated } from 'react-spring';

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
      return (
        <ul className="todos">
          <Trail
            native
            from={{ opacity: 0, height: 0, x: 100 }}
            to={{ opacity: 1, height: 50, x: 0 }}
            keys={this.props.todos.map(({ id }) => id)}
          >
            {this.props.todos.map(
              ({ id, title, completed, editing, toDelete }, index) => ({
                x,
                height,
                opacity,
              }) => (
                <animated.li
                  native
                  key={id}
                  style={{
                    opacity,
                    height,
                    transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                  }}
                  className={classNames({
                    todo: true,
                    'delete-confirmation': toDelete,
                    editing: editing,
                  })}
                >
                  {editing === false ? (
                    <Todo
                      id={id}
                      index={index}
                      title={title}
                      toDelete={toDelete}
                      completed={completed}
                      deleteTodo={this.props.deleteTodo}
                      toggleDelete={this.props.toggleDelete}
                      toggleEdit={this.props.toggleEdit}
                      toggleCompleted={this.props.toggleCompleted}
                      moveTodo={this.props.moveTodo}
                    />
                  ) : (
                    <TodoEditForm
                      id={id}
                      title={title}
                      toggleEdit={this.props.toggleEdit}
                      updateTodo={this.props.updateTodo}
                    />
                  )}
                </animated.li>
              ),
            )}
          </Trail>
        </ul>
      );
    }
  }
}

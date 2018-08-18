import React from 'react';
import Todo from './Todo';
import TodoEditForm from './TodoEditForm';
import classNames from 'classnames';
import { Trail } from 'react-spring';

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
            native={false}
            delay={100}
            from={{ opacity: 0, height: 0, transform: 'translateX(100%)' }}
            to={{ opacity: 1, height: 50, transform: 'translateX(0%)' }}
            keys={this.props.todos.map(todo => todo.id)}
            config={{ duration: 2000 }}
          >
            {/* <Transition
            keys={this.props.todos.map(todo => todo.id)}
            from={{ opacity: 0, height: 0 }}
            enter={{ opacity: 1, height: 50 }}
            leave={{ opacity: 0, height: 0, pointerEvents: 'none' }}
          > */}
            {this.props.todos.map(
              (
                { id, title, completed, editing, toDelete },
                index,
              ) => styles => (
                <li
                  key={id}
                  style={styles}
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
                </li>
              ),
            )}
            {/* </Transition> */}
          </Trail>
        </ul>
      );
    }
  }
}

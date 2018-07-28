import React from 'react';
import remove from '../assets/remove.svg';
import PropTypes from 'prop-types';

const Todo = props => (
  <div>
    {props.toDelete && (
      <div className="delete-confirmation">
        Are you sure you want to delete this todo?{' '}
        <button
          className="delete-confirm"
          onMouseUp={() => props.deleteTodo(props.id)}
        >
          Delete
        </button>{' '}
        or{' '}
        <button
          className="cancel"
          onMouseUp={() => props.toggleDelete(props.id)}
        >
          cancel
        </button>.
      </div>
    )}
    {!props.toDelete && (
      <div>
        <input
          type="checkbox"
          title="Mark as completed"
          checked={props.completed}
          onChange={() => props.toggleCompleted(props.id)}
        />

        <span
          className="todo-value"
          title={`Click to edit (id  ${props.id})`}
          onClick={() =>
            !props.completed && props.toggleEdit && props.toggleEdit(props.id)
          }
        >
          {props.title}
        </span>

        <button
          className="delete"
          onMouseUp={() => props.toggleDelete && props.toggleDelete(props.id)}
        >
          <img alt="Remove" src={remove} />
        </button>
      </div>
    )}
  </div>
);

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  toggleCompleted: PropTypes.func,
  toggleEdit: PropTypes.func,
  toggleDelete: PropTypes.func,
};

export default Todo;

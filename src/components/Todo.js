import React from 'react';
import remove from '../assets/remove.svg';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom';
import flow from 'lodash/flow';

const todoSource = {
  beginDrag(props) {
    return {
      index: props.index,
      id: props.id,
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
  },
};

const todoTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    const sourceListId = monitor.getItem().listId;

    if (dragIndex === hoverIndex) {
      return;
    }

    if (props.listId === sourceListId) {
      props.moveTodo(dragIndex, hoverIndex);
      monitor.getItem().index = hoverIndex;
    }
  },
};

class Todo extends React.Component {
  static propTypes = {
    completed: PropTypes.bool.isRequired,
    toggleCompleted: PropTypes.func,
    toggleEdit: PropTypes.func,
    toggleDelete: PropTypes.func,
    moveTodo: PropTypes.func,
    isDragging: PropTypes.bool,
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
  };

  render() {
    const {
      isDragging,
      connectDragSource,
      connectDropTarget,
      connectDragPreview,
    } = this.props;
    const opacity = isDragging ? 0.2 : 1;

    return (
      <React.Fragment>
        {this.props.toDelete && (
          <div>
            Are you sure you want to delete this todo?{' '}
            <button
              className="delete-confirm"
              onMouseUp={() => this.props.deleteTodo(this.props.id)}
            >
              Delete
            </button>{' '}
            or{' '}
            <button
              className="cancel"
              onMouseUp={() => this.props.toggleDelete(this.props.id)}
            >
              cancel
            </button>
            .
          </div>
        )}
        {!this.props.toDelete &&
          connectDropTarget(
            connectDragPreview(
              <div className={isDragging ? 'dragging' : ''}>
                {connectDragSource(<div className="dragger" />)}
                <input
                  type="checkbox"
                  title="Mark as completed"
                  checked={this.props.completed}
                  onChange={() => this.props.toggleCompleted(this.props.id)}
                />
                <span
                  className="todo-value"
                  title={`Click to edit (id  ${this.props.id})`}
                  onClick={() =>
                    !this.props.completed &&
                    this.props.toggleEdit &&
                    this.props.toggleEdit(this.props.id)
                  }
                >
                  {this.props.title}
                </span>
                <button
                  className="delete"
                  onMouseUp={() =>
                    this.props.toggleDelete &&
                    this.props.toggleDelete(this.props.id)
                  }
                >
                  <img alt="Remove" src={remove} />
                </button>
              </div>,
            ),
          )}
      </React.Fragment>
    );
  }
}

export default flow(
  DropTarget('TODO', todoTarget, connect => ({
    connectDropTarget: connect.dropTarget(),
  })),
  DragSource('TODO', todoSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    connectDragPreview: connect.dragPreview(),
  })),
)(Todo);

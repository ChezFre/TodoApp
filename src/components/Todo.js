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

    console.log(dragIndex, hoverIndex);

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    if (props.listId === sourceListId) {
      props.moveTodo(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      monitor.getItem().index = hoverIndex;
    }
  },
};

class Todo extends React.Component {
  // static propTypes = {
  //   completed: PropTypes.bool.isRequired,
  //   toggleCompleted: PropTypes.func,
  //   toggleEdit: PropTypes.func,
  //   toggleDelete: PropTypes.func,
  // };

  render() {
    const { isDragging, connectDragSource, connectDropTarget } = this.props;
    const opacity = isDragging ? 0.2 : 1;

    return (
      <div style={{ opacity: opacity }}>
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
          connectDragSource(
            connectDropTarget(
              <div>
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
      </div>
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
  })),
)(Todo);

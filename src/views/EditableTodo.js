import React, { Component } from 'react';
import PropTypes from 'prop-types';

import close from '../close.svg';
import save from '../save.svg';

import Todo from './todo.js';

export class EditableTodo extends Component {

    // Properties

    updateField = React.createRef();

    static propTypes = {
        title: PropTypes.string.isRequired,
        updateTodo: PropTypes.func,
        toggleEdit: PropTypes.func,
        index: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        toggleDelete: PropTypes.func,
        toggleCompleted: PropTypes.func
    };

    // Methods

    onKeyUp = (e) => {
        if( e.key === 'Enter' ) {
            this.props.updateTodo( this.props.index, this.updateField.current.value );
        } else if( e.key == 'Escape' ) {
            this.props.toggleEdit( this.props.index );
        }
    }


    render() {
        return (
            this.props.editing ? (
                <div className="edit-form">
                    <input autoFocus type="text" defaultValue={this.props.title} className="edit-field" ref={this.updateField} onKeyUp={this.onKeyUp} />
                    <button type="submit" onMouseUp={ () => this.props.updateTodo(this.props.index, this.updateField.current.value) }><img src={save} alt="Update" /></button>
                    <button type="cancel" onMouseUp={ () => this.props.toggleEdit(this.props.index) }><img src={close} alt="Cancel" /></button>
                </div>
            ) : (
                <Todo
                    index={this.props.index}
                    title={this.props.title}
                    completed={this.props.completed}
                    toggleEdit={this.props.toggleEdit}
                    toggleCompleted={this.props.toggleCompleted}
                    toggleDelete={this.props.toggleDelete} />
          )
        );
    }
}
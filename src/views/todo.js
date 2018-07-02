import React, { Component } from 'react';
import remove from '../remove.svg';

export default class Todo extends Component {
    render() {
        return (
            <div>
                {this.props.completed}
                <input
                    type="checkbox"
                    title="Mark as completed"
                    checked={this.props.completed}
                    onChange={ () => this.props.toggleCompleted(this.props.index) } />
                
                <span className="todo-value" title={ `Click to edit (index ${this.props.index})` } onClick={ () => !this.props.completed && this.props.toggleEdit(this.props.index)}>{this.props.title}</span>
              
              <button className="delete" onMouseUp={ () => this.props.toggleDelete(this.props.index)}><img alt="Remove" src={remove} /></button>
            </div>
        )
    }
}
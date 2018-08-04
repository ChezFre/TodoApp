import React from 'react';
import save from '../assets/save.svg';
import close from '../assets/close.svg';

class TodoEditForm extends React.Component {
  state = {
    value: '',
  };

  componentWillMount() {
    this.setState({
      value: this.props.title,
    });
  }

  onKeyUp = e => {
    this.setState({
      value: e.target.value,
    });

    if (e.key === 'Enter') {
      this.props.updateTodo(this.props.id, this.state.value);
    } else if (e.key === 'Escape') {
      this.props.toggleEdit(this.props.id);
    }
  };

  render() {
    return (
      <div className="edit-form">
        <input
          autoFocus
          type="text"
          defaultValue={this.props.title}
          className="edit-field"
          onKeyUp={this.onKeyUp}
        />
        <button
          type="submit"
          onMouseUp={() =>
            this.props.updateTodo(this.props.id, this.state.value)
          }
        >
          <img src={save} alt="Update" />
        </button>
        <button
          type="cancel"
          onMouseUp={() => this.props.toggleEdit(this.props.id)}
        >
          <img src={close} alt="Cancel" />
        </button>
      </div>
    );
  }
}

export default TodoEditForm;

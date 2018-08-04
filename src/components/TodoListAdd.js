import React from 'react';

export default class TodoListAdd extends React.Component {
  state = {
    newValue: '',
  };

  onInputChange = e => {
    this.setState({
      newValue: e.target.value,
    });
  };

  render() {
    return (
      <div className="add-form">
        <input
          type="text"
          onChange={this.onInputChange}
          value={this.state.newValue}
          placeholder="New Todo…"
        />
        <button
          type="submit"
          onClick={() => {
            this.props.addTodo(this.state.newValue);
            this.setState({ newValue: '' });
          }}
          disabled={this.state.newValue.trim().length === 0}
        >
          Add Todo
        </button>
      </div>
    );
  }
}

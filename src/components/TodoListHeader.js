import React from 'react';

const TodoListHeader = props => (
  <header>
    <h1>Todos</h1>
    <input
      type="search"
      placeholder="Search…"
      className="search-field"
      value={props.query}
      onChange={e => {
        props.queryTodos(e.target.value);
      }}
    />
  </header>
);

export default TodoListHeader;

import React from 'react';

const TodosListFooter = props => (
  <footer>
    {props.nrOfTodos} To-Dos &#8212;
    {props.completedTodos} Completed &#8212;
    <label>
      <input
        type="checkbox"
        checked={props.filter === 'FILTER_COMPLETED'}
        onChange={() => props.toggleCompletedVisibility()}
      />{' '}
      Hide completed
    </label>{' '}
    &#8212;
    {props.loading}
    <button
      onClick={props.fetchTodos}
      className={['fetch', props.loading ? 'loading' : ''].join(' ')}
      disabled={props.loading}
    >
      Fetch
    </button>
  </footer>
);

export default TodosListFooter;

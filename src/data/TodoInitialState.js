const todoInitialState = {
  filter: '',
  query: '',
  todos: [
    {
      id: 'ffei2-item1',
      title: 'My title',
      completed: false,
      toDelete: false,
      editing: false,
    },
    {
      id: 'ffei2-item2',
      title: 'My title 2',
      completed: true,
      toDelete: false,
      editing: false,
    },
    {
      id: 'ffei2-item3',
      title: 'My title 3',
      completed: false,
      toDelete: false,
      editing: false,
    },
  ],
  loading: false,
};

export default todoInitialState;

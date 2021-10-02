import { createStore } from 'redux';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

const reducer = (state = initialState, { type, payload }) => {
  const { items } = state.contacts;

  switch (type) {
    case 'phoneBook/addContact':
      return { items: [...items, payload] };

    case 'phoneBook/deleteContact':
      return { items: items.filter(item => item.id !== payload) };

    default:
      return state;
  }
};

export const store = createStore(reducer);

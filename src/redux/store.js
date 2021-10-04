import { createStore } from 'redux';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};
console.log(initialState);

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'phoneBook/addContact':
      return {
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, payload],
        },
      };

    case 'phoneBook/deleteContact':
      return {
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter(item => item.id !== payload),
        },
      };

    case 'phoneBook/filterContacts':
      return {
        contacts: {
          ...state.contacts,
          filter: payload,
        },
      };

    default:
      return state;
  }
};

export const store = createStore(reducer);

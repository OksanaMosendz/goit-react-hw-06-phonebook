import { actionTypes } from './phonebook-types';
export const addContact = contact => ({
  type: actionTypes.ADD,
  payload: contact,
});

export const deleteContact = id => ({
  type: actionTypes.DELETE,
  payload: id,
});

export const filterContacts = filterValue => ({
  type: actionTypes.FILTER,
  payload: filterValue,
});

export const addContact = contact => ({
  type: 'phoneBook/addContact',
  payload: contact,
});

export const deleteContact = id => ({
  type: 'phoneBook/deleteContact',
  payload: id,
});

export const filterContacts = filterValue => ({
  type: 'phoneBook/filterContacts',
  payload: filterValue,
});

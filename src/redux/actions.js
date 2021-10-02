export const addContact = (name, number) => ({
  type: 'phoneBook/addContact',
  payload: { name, number },
});

export const deleteContact = id => ({
  type: 'phoneBook/deleteContact',
  payload: id,
});

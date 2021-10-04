import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { connect } from 'react-redux';
import * as actions from '../redux/phonebook/phonebook-actions';

const App = ({ items, filter, addContact, deleteContact, filterContacts }) => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm items={items} addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} items={items} filterContacts={filterContacts} />
      <ContactList
        filter={filter}
        items={items}
        deleteContact={deleteContact}
      />
    </>
  );
};

const mapStateToProps = state => ({
  items: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  addContact: contact => dispatch(actions.addContact(contact)),
  deleteContact: id => dispatch(actions.deleteContact(id)),
  filterContacts: value => dispatch(actions.filterContacts(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

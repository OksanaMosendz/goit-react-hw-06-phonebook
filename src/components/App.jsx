import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  // useEffect(() => {
  //   const parseLocalContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (parseLocalContacts) {
  //     setContacts(parseLocalContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

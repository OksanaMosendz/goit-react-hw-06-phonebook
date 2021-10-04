import PropTypes from 'prop-types';
import { Button, Li, P } from './ContactList.styled';

export const ContactList = ({ filter, items, deleteContact }) => {
  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    filteredContacts.length > 0 && (
      <ul>
        {filteredContacts.map(contact => (
          <Li key={contact.id}>
            <P>
              {contact.name}:{contact.number}
            </P>
            <Button
              id={contact.id}
              type="button"
              onClick={e => deleteContact(e.target.id)}
            >
              Delete
            </Button>
          </Li>
        ))}
      </ul>
    )
  );
};

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

import PropTypes from 'prop-types';
import { Button, Li, P } from './ContactList.styled';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

const ContactList = ({ filter, items, deleteContact }) => {
  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
  console.log(items);

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

const mapStateToProps = state => ({
  items: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,

  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

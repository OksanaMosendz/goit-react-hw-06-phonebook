import PropTypes from 'prop-types';
import { Label } from './Filter.styled';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

const Filter = ({ filterContacts, filter }) => {
  return (
    <Label>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={e => filterContacts(e.target.value)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </Label>
  );
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  filterContacts: value => dispatch(actions.filterContacts(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterContacts: PropTypes.func.isRequired,
};

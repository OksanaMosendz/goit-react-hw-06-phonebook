import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

export const Filter = ({ filterContacts, filter }) => {
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

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterContacts: PropTypes.func.isRequired,
};

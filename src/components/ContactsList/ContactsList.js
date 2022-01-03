import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactsListItem from '../ContactsListItem';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import styles from './ContactsList.module.css';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(contact => {
        return (
          <ContactsListItem
            key={contact.id}
            contact={contact}
            onDelete={() => onDelete(contact.id)}
          />
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onDelete: PropTypes.func,
};

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(phonebookActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

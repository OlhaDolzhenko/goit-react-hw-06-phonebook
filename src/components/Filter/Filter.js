import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div className={styles.container}>
    <label className={styles.label}>
      Find contacts by name
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(phonebookActions.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

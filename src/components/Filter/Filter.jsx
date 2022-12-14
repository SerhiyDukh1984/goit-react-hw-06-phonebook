import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from 'Redux/contacts/contacts-actions';
import s from './/Filter.module.css';

export default function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;

    dispatch(filterContact(value));
  };

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
}

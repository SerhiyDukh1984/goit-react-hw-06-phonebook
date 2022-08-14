import { removeContact } from 'Redux/contacts/contacts-actions';
import { useDispatch, useSelector } from 'react-redux';
import s from './ContactsList.module.css';

export default function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul className={s.list}>
      {filteredContacts.map(contact => (
        <li className={s.item} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={s.button}
            type="button"
            onClick={() => dispatch(removeContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

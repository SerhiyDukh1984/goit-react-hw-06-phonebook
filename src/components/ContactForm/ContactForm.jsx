import { useState } from 'react';
import { addContact } from '../../Redux/contacts/contacts-actions';
import { useDispatch, useSelector } from 'react-redux';
import s from './ContactForm.module.css';
import { useEffect } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  console.log('🚀 ~ contacts', contacts);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify([...contacts]));
  }, [contacts]);

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    )
      return alert(`${name} is already in contacts.`);

    dispatch(addContact({ name: name, number: number }));
    // window.localStorage.setItem(
    //   'contacts',
    //   JSON.stringify([...contacts])
    // );

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <h2 className={s.title}>Name</h2>
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>

      <label className={s.label}>
        <h2 className={s.title}>Number</h2>
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </label>
    </form>
  );
};

export default ContactForm;

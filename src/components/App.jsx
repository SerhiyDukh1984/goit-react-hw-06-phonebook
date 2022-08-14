import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

const App = () => {
  return (
    <Section title="Phonebook">
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Section>
  );
};

export default App;

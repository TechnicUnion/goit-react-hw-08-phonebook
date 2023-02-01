import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Title } from 'styles';
import { ContactsSection } from './Contacts.styled';

export function Contacts() {
  return (
    <ContactsSection>
      <Title>Add new contact</Title>
      <ContactForm />
      <Filter />
      <ContactList />
    </ContactsSection>
  );
}

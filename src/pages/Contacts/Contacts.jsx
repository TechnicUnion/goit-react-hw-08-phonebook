import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Section, Title } from 'styles';

export function Contacts() {
  return (
    <Section>
      <Title>Add new contact</Title>
      <ContactForm />
      <Filter />
      <ContactList />
    </Section>
  );
}

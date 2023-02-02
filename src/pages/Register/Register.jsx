import { Section, Title } from 'styles';
import { RegisterForm } from '../../components/RegisterForm';

export const Register = ({ setPath }) => {
  return (
    <Section>
      <Title>Fill out the registration form</Title>
      <RegisterForm setPath={setPath} />
    </Section>
  );
};

import { Section, Title } from 'styles';
import { RegisterForm } from '../../components/RegisterForm';

export const Register = ({ setPath }) => {
  return (
    <Section>
      <Title>Register yourself</Title>
      <RegisterForm setPath={setPath} />
    </Section>
  );
};

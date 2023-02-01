import { Section, Title } from 'styles';
import { RegisterForm } from '../../components/RegisterForm';

const Register = ({ setPath }) => {
  return (
    <Section>
      <Title>Enter your registration details</Title>
      <RegisterForm setPath={setPath} />
    </Section>
  );
};
export default Register;

// import { Section, Title } from 'styles';
import { RegisterForm } from 'components/RegisterForm';

export const Register = ({ setPath }) => {
  return (
    <div>
      <p>Enter your registration details</p>
      <RegisterForm setPath={setPath} />
    </div>
  );
};

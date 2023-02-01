import { RegisterForm } from '../../components/RegisterForm';

export const Register = ({ setPath }) => {
  return (
    <div>
      <h2>Register yourself</h2>
      <RegisterForm setPath={setPath} />
    </div>
  );
};

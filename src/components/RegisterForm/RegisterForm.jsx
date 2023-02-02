import { Formik, Form, useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import * as yup from 'yup';
import { register } from 'redux/authOperations';
import { selectAuthError } from 'redux/selectors';
import { Button, Input, Label } from 'styles';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export const RegisterForm = ({ setPath }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const error = useSelector(selectAuthError);

  useEffect(() => {
    setPath(pathname);
  }, [pathname, setPath]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values, actions) => {
      dispatch(register(values));
      actions.resetForm();
    },
  });

  return (
    <>
      <Formik validationSchema={schema}>
        <Form onSubmit={formik.handleSubmit}>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <Label htmlFor="pass">Password</Label>
          <Input
            type="password"
            id="pass"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Minimum number of characters is 6"
          />
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
      {error && <p>Email or password entered incorrectly, please try again</p>}
    </>
  );
};

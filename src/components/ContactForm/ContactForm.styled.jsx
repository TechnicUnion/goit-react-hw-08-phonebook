import styled from 'styled-components';
import { Input } from 'styles';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 4px;
`;

export const ContactInput = styled(Input)`
  width: 100%;
`;

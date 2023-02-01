import styled from 'styled-components';

export const Label = styled.label`
  font-size: 16px;
  color: ${props => props.theme.color.mainColor};
  margin-bottom: 5px;
`;

export const Input = styled.input`
  display: block;
  margin-bottom: 10px;
  width: 400px;
  height: 30px;
  font-size: 16px;
  color: ${props => props.theme.color.secondaryColor};
`;

import styled from 'styled-components';

export const Button = styled.button`
  box-sizing: border-box;
  padding: 5px 15px;
  font-size: 18px;
  color: ${props => props.theme.color.mainColor};
  background-color: rgb(61, 203, 231);
  border: 1px solid ${props => props.theme.color.mainColor};
  border-radius: 4px;
  transition: all 350ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background-color: ${props => props.theme.color.hoverBg};
    color: ${props => props.theme.color.hoverColor};
  }
`;

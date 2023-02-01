import styled from 'styled-components';
import { Button } from 'styles';

export const List = styled.ul`
  padding: 0;
  width: 400px;
  list-style: none;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.color.mainColor};
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const ContactItemWrapper = styled.div`
  display: flex;
  max-width: 350px;
  justify-content: space-between;
`;

export const DeleteBtn = styled(Button)`
  font-size: 12px;
  background-color: rgb(61, 203, 231);
`;

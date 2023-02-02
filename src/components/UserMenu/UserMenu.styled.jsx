import styled from 'styled-components';
import { Button } from '../../styles';

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const MenuMail = styled.p`
  margin-right: 20px;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 20px;
  color: ${props => props.theme.color.secondaryColor};
`;

export const Logout = styled(Button)`
  font-size: 16px;
`;

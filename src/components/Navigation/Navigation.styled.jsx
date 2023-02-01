import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBox = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const NavItem = styled(NavLink)`
  font-size: 24px;
  text-decoration: none;
  color: ${props => props.theme.color.secondaryColor};
  transition: all 350ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    text-decoration: underline;
  }

  &:not(:last-child) {
    margin-right: 20px;
  }

  &.active {
    color: ${props => props.theme.color.activeLinkColor};
  }
`;

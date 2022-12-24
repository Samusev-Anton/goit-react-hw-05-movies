import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const NavItem = styled(NavLink)`
  font-size: 20px;
  font-weight: 500;
  border: 1px solid;
  background-color: white;
  border-radius: 4px;
  padding: 10px 20px;

  &.active {
    background-color: blue;
    color: white;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: blue;
  }
`;

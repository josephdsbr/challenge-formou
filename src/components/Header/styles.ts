import styled from 'styled-components';
import { NavLink, BrowserRouter } from 'react-router-dom';
import { darken, rgba } from 'polished';
export const Container = styled.div`
  width: 100%;
  background: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 0.7rem;
`;

export const Logo = styled.div`
  width: 10%;
  text-align: center;
  font-size: 1.7rem;
`;

export const MenuLink = styled(NavLink)`
  color: #434343;
  text-decoration: none;
  font-size: 1.7rem;
  margin: 0 2.5rem;
  padding: 1rem;
  transition: 0.5s;

  &:hover {
    color: ${darken(0.5, '#434343')};
    background: ${rgba('#143EA3', 0.08)};
  }

  &.selected {
    color: #143ea3;
    background: ${rgba('#143EA3', 0.08)};
    font-weight: 600;
  }
`;
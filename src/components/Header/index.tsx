import React from 'react';
import { Container, Logo, MenuLink } from './styles';

const Header: React.FC = () => (
  <Container>
    <Logo>
      <span>LOGO</span>
    </Logo>
    <MenuLink to="/tasks" activeClassName="selected">Tarefas</MenuLink>
    <MenuLink to="/user" activeClassName="selected">Usuários</MenuLink>
  </Container>
);

export default Header;

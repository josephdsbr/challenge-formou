import React from 'react';
import { Container, Logo, MenuLink } from './styles';

const Header: React.FC = () => (
  <Container>
    <Logo>
      <span>LOGO</span>
    </Logo>
    <MenuLink to="/" activeClassName="selected">Tarefas</MenuLink>
    <MenuLink to="/users" activeClassName="selected">Usuários</MenuLink>
  </Container>
);

export default Header;

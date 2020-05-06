import React from 'react';
import { Container, Content, DefaultHeader } from './styles';

const DefaultLayout: React.FC = ({ children }) => (
  <Container>
    <DefaultHeader />
    <Content>
      {children}
    </Content>
  </Container>
);

export default DefaultLayout;

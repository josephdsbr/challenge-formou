import React, { useState, useEffect } from 'react';
import { 
  Container,
  Table,
  TableHeader,
  TableContent,
  TableHeaderItem,
  TableItemContainer,
  StatusInfo,
  TableContentLine
 } from './styles';

const UsersList: React.FC = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    async function LoadUsers() {
     console.log('oie');
    }
  }, [])

  return <Container>
    <Table>
      <TableHeader>
        <TableHeaderItem>Tarefa</TableHeaderItem>
        <TableHeaderItem>Responsável</TableHeaderItem>
        <TableHeaderItem>Status</TableHeaderItem>
      </TableHeader>
      <TableContent>
        <TableContentLine>
          <TableItemContainer>
            <span className="tarefa">Criar telas</span>
          </TableItemContainer>
          <TableItemContainer>
            <span className="responsavel">Marília Mendonça</span>
          </TableItemContainer>
          <TableItemContainer>
            <StatusInfo status="Feito">Feito</StatusInfo>
          </TableItemContainer>  
        </TableContentLine>
      </TableContent>
    </Table>
  </Container>
};

export default UsersList;

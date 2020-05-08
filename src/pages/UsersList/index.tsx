import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clientFetchUsersRequest } from '../../store/modules/tasks/actions';
import { ApplicationState } from '../../store';
import { TaskModel } from '../../store/modules/tasks/types';
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
  const dispatch = useDispatch();
  const state = useSelector<ApplicationState, ApplicationState>(state => state);
  useEffect(() => {
    async function LoadUsers() {
      dispatch(clientFetchUsersRequest(1));
      
    }
    
    LoadUsers();
    console.log(state)
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

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clientFetchUsersRequest } from '../../store/modules/tasks/actions';
import { ApplicationState } from '../../store';
import { TaskModel, UserModel } from '../../store/modules/tasks/types';
import history from '../../services/history';
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


const TasksList: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector<ApplicationState, TaskModel>(state => state.tasks);
  
  useEffect(() => {
    async function LoadUsers() {
      dispatch(clientFetchUsersRequest(1)); 
    }
    LoadUsers();
  }, [])

  const onHandleSelectUser = (user: UserModel) => {
    history.push('/user', user);
  }

  return (<Container>
    <Table>
      <TableHeader>
        <TableHeaderItem>Tarefa</TableHeaderItem>
        <TableHeaderItem>Responsável</TableHeaderItem>
        <TableHeaderItem>Status</TableHeaderItem>
      </TableHeader>
      <TableContent> 
        {
          tasks.items.map(item => (
        <TableContentLine>
          <TableItemContainer>
            <span className="tarefa">{item?.title}</span>
          </TableItemContainer>
          <TableItemContainer>
            <span
             className="responsavel"
             onClick={() => onHandleSelectUser(item?.user)}
             >{item?.user?.username}</span>
          </TableItemContainer>
          <TableItemContainer>
            <StatusInfo status={item.completed}>{item.completed ? 'Feito' : 'Pendente'}</StatusInfo>
          </TableItemContainer>  
        </TableContentLine>
          ))
        }
        
      </TableContent>
    </Table>
  </Container>
  )
};

export default TasksList;

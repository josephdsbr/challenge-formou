import React, { useEffect, useState, useMemo } from 'react';
import {
  Container,
  Content,
  UserImgContent,
  UserImg,
  UserInfo,
  UserInfoName,
  UserInfoEmail,
  UserInfoTasksPeding
} from './styles';
import { TasksItemModel, UserModel } from '../../store/modules/tasks/types';
import { ApplicationState } from '../../store';
import { useSelector } from 'react-redux';
import ProfileIcon from '../../assets/profile-icon.svg';
// @ts-ignore
const User: React.FC = ({ location }) => {
  const items = useSelector<ApplicationState, 
  TasksItemModel[]>(state => state.tasks.items);
  const [user, setUser] = useState<UserModel>({
    username: 'José Vinícius',
    email: 'josephdsbr@gmail.com',
    address: {
      city: 'Recife',
      geo: {
        lat: "-8.02",
        lng: "-34.91"
      },
      street: "Avenida Doutor Eurico Chaves",
      suite: "1º andar",
      zipcode: "52071255"
    },
    company: {
      bs: '1',
      catchPhrase: '',
      name: 'Flexpag'
    },
    id: 99999999,
    phone: '81997667754',
    website: 'https://www.linkedin.com/in/josephdsbr/'
   });

  useEffect(() => {
    if (location.state !== null) {
      setUser(location.state);
    }
  }, [])

  const itemsNotSolved = useMemo(() => {
    let i = 0;
    items.map(item => {
      if (item?.user?.id === user?.id && !item.completed) {
        i = i + 1;
      }
    })
    return i;
  }, [items, user]);

  return (
    <Container>
      <Content>
        <UserImgContent>
          <UserImg src={ProfileIcon} />
        </UserImgContent>
        <UserInfo>
          <UserInfoName>{user?.username}</UserInfoName>
            <UserInfoEmail>{user?.email}</UserInfoEmail>
        <UserInfoTasksPeding>{ `${itemsNotSolved} Tarefas Pendentes` }</UserInfoTasksPeding>
        </UserInfo>
      </Content>
    </Container>
  )
}

export default User;
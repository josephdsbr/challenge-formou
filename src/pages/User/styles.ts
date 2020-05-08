import styled from 'styled-components';

export const Container = styled.div`
  width: 95%;
  background: #ffffff;
  padding: 1.5rem 2rem;
  align-self: flex-start;
  margin: 2rem 0;
  border-radius: 4px;
  box-shadow: 0px 3px 6px #00000029;
`;

export const Content = styled.div`
  display: flex;
  max-width: 20%;
  align-items: center;
  justify-content: flex-start;
`;

export const UserImgContent = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 2rem;
`;

export const UserImg = styled.img`
  height: 100%;
  width: 100%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
`;

export const UserInfoName = styled.span`
  font-weight: 700;
  font-size: 1.35rem;
`;

export const UserInfoEmail = styled.span`
  font-size: 1rem;
`;

export const UserInfoTasksPeding = styled.span`
  font-size: 1rem;
  text-decoration: underline;
  color: #143EA3;
`;

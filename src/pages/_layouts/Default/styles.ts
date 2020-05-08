import styled from 'styled-components';
import Header from '../../../components/Header';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: #F8FAFB;
`;

export const DefaultHeader = styled(Header)`
  height: 15%;
  widht: 100%;
`;

export const Content = styled.div`
  height: 85%;
  widht: 100%;
  display: flex;
  align-items:center;
  justify-content: center;
`;
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
export const Container = styled.div`
  width: 70%;
  height: 90%;
  background: #ffffff;
`;

export const Table = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 2rem;
`;

export const TableContentLine = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const TableHeader = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TableHeaderItem = styled.span`
  padding: 1rem;
  width: 15%;
  text-align: center; 
  text-transform: uppercase;
  color: #143EA3;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const TableItemContainer = styled.div`
  width: 15%;
  text-align: center;  
`;

export const TableContent = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .tarefa, 
  .responsavel,
  .status {
    padding: 1rem;
    width: 33%;
    text-align: center;
  }

  .tarefa {}

  .responsavel {
    color: #143EA3;
    text-decoration: underline;
    cursor: pointer;
  }
`;

type StatusInfoProps = {
  status: string;
}

export const StatusInfo = styled.span<StatusInfoProps>`
  padding: 1rem;
  background: red;
  border-radius: 0.4rem;

  ${props => props.status === 'Feito' ? css`
    background: ${rgba('#87B634', 0.08)} ;
    color: #87B634;
  ` : css`
    background: ${rgba('#D74C4C', 0.08)} ;
    color: #D74C4C;
  `}
`;
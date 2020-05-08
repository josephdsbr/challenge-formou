import styled, { css } from 'styled-components';
import { rgba } from 'polished';
export const Container = styled.div`
  width: 70%;
  height: 90%;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 3px 6px #00000029;
`;

export const Table = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 2rem;
`;

export const TableContentLine = styled.div`
  width: 100%;
  margin: 1rem 0;
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
  max-height: 90%;
  overflow: scroll;
  width: 100%;
  display: flex;
  flex-direction: column;
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
  status: boolean;
}

export const StatusInfo = styled.span<StatusInfoProps>`
  padding: 1rem;
  background: red;
  border-radius: 0.4rem;

  ${props => props.status ? css`
    background: ${rgba('#87B634', 0.08)} ;
    color: #87B634;
  ` : css`
    background: ${rgba('#D74C4C', 0.08)} ;
    color: #D74C4C;
  `}
`;
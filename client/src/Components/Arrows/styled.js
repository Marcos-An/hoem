import styled from 'styled-components';

export const Arrow = styled.div`
  height: 60px;
  width: 60px;
  background-color: rgb(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: #6923e7;
    cursor: pointer;
  }
`;

export const ArrowNone = styled.div`
  height: 60px;
  width: 60px;
  opacity: 0.4;
  background-color: rgb(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

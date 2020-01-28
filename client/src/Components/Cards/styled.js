import styled from 'styled-components';

export const Body = styled.div`
  height: 300px;
  width: 100%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 0px 4px -2px rgba(179, 179, 179, 1);
  transition: transform 0.2s;
  :hover {
    box-shadow: 0px 0px 10px -1px rgba(179, 179, 179, 1);
    transform: scale(1.02);
    cursor: pointer;
  }
`;

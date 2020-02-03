import styled from 'styled-components';

export const Body = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
  align-items: center;
  @media screen and (max-width: 600px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    grid-column-gap: 30px;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #cfd2d4;
  div {
    display: flex;
    align-items: center;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #7e7e7e;
`;
export const Title = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #7e7e7e;
`;

import styled from 'styled-components';

export const BoddyCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CardBox = styled.div`
  display: grid;
  padding: 3% 0%;
  grid-template-columns: repeat(3, 29vw);
  grid-gap: 30px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 90vw);
  }
`;

import styled from 'styled-components';

export const Boddy = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
`;

export const Search = styled.div`
  z-index: 99;
  height: 55vh;
  width: 95vw;
  margin-top: -100px;
  background: white;
  border-radius: 7px;
`;

export const Box = styled.div`
  padding: 2% 6%;
`;

export const Title = styled.h1``;

export const UpperTitle = styled.h3`
  color: #6923e7;
  line-height: 0;
  margin-bottom: -7px;
`;

export const BoddyCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 9% 3% 3% 3%;
`;

export const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 25vw);
  grid-gap: 30px;
  justify-content: center;
  align-items: center;
`;

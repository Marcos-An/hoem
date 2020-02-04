import styled from 'styled-components';

export const Body = styled.div`
  padding: 0% 3%;
`;
export const BoddyCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0% 3%;
  @media screen and (max-width: 600px) {
    margin: 0% 3%;
  }
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

export const Title = styled.h1`
  margin: 0;
`;

export const Search = styled.p`
  margin: 0px 10px 0px 0px;
  color: #6f42c1;
  font-size: 18px;
`;

export const Texts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3%;
  :hover {
    cursor: pointer;
  }
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #cfd2d4;
  margin: 20px 0px 10px;
`;
export const Filter = styled.div`
  height: 200px;
  background-color: #fff;
  border-radius: 7px;
  padding: 1.5% 3%;
  margin: 20px 0px;
`;

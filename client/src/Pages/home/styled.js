import styled from 'styled-components';

export const Boddy = styled.div`
  display: flex;
  justify-content: center;
`;

export const Search = styled.div`
  z-index: 99;
  width: 95vw;
  margin-top: -100px;
  background: white;
  border-radius: 7px;
`;

export const Box = styled.div`
  padding: 2% 6%;

  @media screen and (max-width: 600px) {
    padding: 2% 6% 6% 6%;
  }
`;

export const Title = styled.h1`
  margin: 0px;
  text-align: center;
  @media screen and (max-width: 600px) {
    font-size: 25px;
    margin-bottom: 20px;
  }
`;

export const UpperTitle = styled.p`
  color: #6923e7;
  text-align: center;
`;

export const Welcome = styled.h1`
  font-size: 50px;
  line-height: 1;
`;

export const SubTitle = styled.p`
  color: #fff;
  margin-top: -14px;
`;

export const BoddyCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 9% 3% 3% 3%;
  @media screen and (max-width: 600px) {
    margin: 15% 3% 3% 3%;
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

export const Agentes = styled.div`
  height: 450px;
  display: flex;
  margin: 8% 0% 5% 0%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: left;

  @media screen and (max-width: 600px) {
    text-align: center;
  }
`;

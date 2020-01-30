import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3% 0%;
  @media screen and (max-width: 600px) {
    height: auto;
  }
`;

export const Categorias = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  padding: 3% 0%;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
    width: 85vw;
  }
`;

export const Laterais = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 30px;

  @media screen and (max-width: 600px) {
    grid-template-rows: 1fr;
    grid-gap: 10px;
    width: 85vw;
  }
`;

export const Categoria = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30vw;
  height: 500px;
  border-radius: 4px;
  background: linear-gradient(rgb(0, 0, 0, 0.4), rgb(0, 0, 0, 0.4)),
    url(${props => props.img});
  background-size: cover;
  background-position: center;
  transition: all 0.6s ease;
  :hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 17px -2px rgba(179, 179, 179, 1);
    cursor: pointer;
  }
  @media screen and (max-width: 600px) {
    width: 85vw;
    height: 20vh;
  }
`;

export const CategoriaLateral = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
  background: linear-gradient(rgb(0, 0, 0, 0.6), rgb(0, 0, 0, 0.6)),
    url(${props => props.img});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.6s ease;
  :hover {
    transform: scale(1.03);
    box-shadow: 0px 0px 17px -2px rgba(179, 179, 179, 1);
    cursor: pointer;
  }
  @media screen and (max-width: 600px) {
    width: 85vw;
    height: 20vh;
  }
`;

export const TitleCatergoria = styled.h1`
  color: white;
  font-weight: 500;
  margin: 0px;
`;

export const Qty = styled.p`
  font-size: 17px;
  color: white;
`;

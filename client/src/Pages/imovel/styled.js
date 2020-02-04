import styled from 'styled-components';

export const Body = styled.div`
  padding: 0% 3%;
`;

export const BasicInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1``;

export const Divider = styled.div`
  height: 1px;
  background-color: #cfd2d4;
  margin: 20px 0px 10px;
`;

export const Preco = styled.h1`
  font-size: 30px;
  font-weight: 800;
  color: #6923e7;
  margin: 0;
`;

export const PropertyPrice = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #aeb3ba;
  text-align: right;
  @media screen and (max-width: 600px) {
    text-align: left;
    margin-bottom: -2px;
  }
`;

export const Endereco = styled.h4`
  font-size: 15px;
  font-weight: 400;
  color: #7e7e7e;
  padding: 0px;
  margin: 0px;
`;

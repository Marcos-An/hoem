import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    display: block;
    padding: 15px;
  }
`;
export const Title = styled.h1`
  color: white;
  font-weight: 1000;
  font-size: 60px;
  line-height: 0;
  @media only screen and (max-width: 600px) {
    line-height: 1;
    font-size: 40px;
    margin: 10 0px;
  }
`;
export const UpperTitle = styled.h3`
  color: white;
  font-weight: 600;
  line-height: 1;
`;

export const SubTitle = styled.h4`
  color: white;
  font-weight: 400;
`;

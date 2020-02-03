import styled from 'styled-components';

export const Slide = styled.div`
  position: relative;
  padding: 0% 1.5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center;
  height: 700px;
  overflow: hidden;
  transition: 0.5s ease;
`;

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
  font-weight: 600;
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

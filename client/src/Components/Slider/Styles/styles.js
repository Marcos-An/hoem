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

export const Arrow = styled.div`
  height: 60px;
  width: 60px;
  background-color: rgb(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: #6923e7;
    cursor: pointer;
  }
`;

import styled from 'styled-components';

export const Arrow = styled.div`
  height: 60px;
  width: 60px;
  background-color: rgb(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  .arrow {
    font-size: 25px;
    color: white;
  }
  :hover {
    background-color: #6923e7;
    cursor: pointer;
  }
  @media screen and (max-width: 600px) {
    height: 40px;
    width: 40px;
    .arrow {
      font-size: 13px;
    }
  }
`;

export const ArrowNone = styled.div`
  height: 60px;
  width: 60px;
  opacity: 0.4;
  background-color: rgb(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  .arrow {
    font-size: 25px;
    color: white;
  }
  @media screen and (max-width: 600px) {
    height: 30px;
    width: 30px;
    .arrow {
      font-size: 13px;
    }
  }
`;

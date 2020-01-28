import styled from 'styled-components';

export const Body = styled.div`
  height: 320px;
  width: 100%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 0px 3px -2px rgba(179, 179, 179, 1);
  overflow: hidden;
  :hover {
    cursor: pointer;
  }
`;

export const Img = styled.div`
  width: 100%;
  height: 60%;
  border-radius: 8px 8px 0px 0px;
  background-image: url('${props => props.img}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: all .6s ease;
  :hover {
    transform: scale(1.04);
    cursor: pointer;
  }
`;

export const BoxIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 40px;
  border-radius: 3px;
  background-color: rgb(0, 0, 0, 0.7);
  position: relative;
  top: -175px;
  left: 15px;
  z-index: 9;

  :hover {
    transition: 0.3s;
    background-color: #6923e7;
  }
`;

export const Images = styled.div`
  width: 70%;
  height: 80%;
  border-radius: 10px;
  background-image: url(${props => props.img});
  background-size: cover;

  @media screen and (max-width: 600px) {
    width: 90%;
    height: 30%;
  }
`;

export const Modal = styled.div`
  display: none;
  position: fixed;
  padding: 20px;
  justify-content: space-around;
  align-items: center;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.7);
  .close {
    font-size: 35px;
    color: white;
    top: 40px;
    right: 60px;
    position: absolute;
  }
  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;

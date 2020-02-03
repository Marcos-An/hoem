import styled from 'styled-components';

export const Body = styled.div`
  margin: 20px 0px;
  overflow: hidden;
  img {
    height: 90vh;
    width: 100%;
    border-radius: 6px;
  }
`;

export const Imagens = styled.div`
  display: flex;
`;
export const Thumb = styled.div`
  height: 100px;
  width: 200px;
  border-radius: 6px;
  margin: 10px 15px 10px 0px;
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;

  div {
    height: 100px;
    width: 200px;
    border-radius: 6px;
    opacity: 0;
    background-color: #6923e7;
    :hover {
      opacity: 0.4;
    }
  }
`;

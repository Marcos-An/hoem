import styled from 'styled-components';

export const ButtonWhite = styled.button`
  background-color: white;
  color: black;
  font-size: 20px;
  font-weight: 600;
  font-family: 'Nunito', sans-serif;
  height: 60px;
  margin: 1em;
  padding: 0.25em 2em;
  border: none;
  border-radius: 5px;
  :hover {
    background-color: #6f42c1;
    color: white;
    cursor: pointer;
  }
  @media only screen and (max-width: 600px) {
    margin: 1em 0;
  }
`;
export const Button = styled.button`
  background-color: #6923e7;
  width: 100%;
  color: white;
  font-size: 20px;
  font-weight: 600;
  font-family: 'Nunito', sans-serif;
  height: 50px;
  margin-top: 2.2em;
  padding: 0.25em 2em;
  border: none;
  border-radius: 5px;
  :hover {
    background-color: #6f42c1;
    color: white;
    cursor: pointer;
  }
`;

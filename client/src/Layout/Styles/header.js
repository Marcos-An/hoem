import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0% 3%;
  height: 15vh;
  background-color: white;

  ul {
    display: flex;
  }
  li {
    list-style-type: none;
    margin: 0 2vw;
  }
  a {
    text-decoration: none;
    color: black;
    :hover {
      color: #6923e7;
    }
  }
  nav {
    margin: 0;
  }
`;

export const Logo = styled.div`
  height: 50px;
  width: 100px;
  border-radius: 7px;
  background-color: #6f42c1;
`;

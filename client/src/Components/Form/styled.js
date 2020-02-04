import styled from 'styled-components';

export const Form = styled.div`
  height: 100%;
`;
export const Fild = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 15px;
  align-items: flex-end;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr !important;
  }
  h4 {
    line-height: 0;
    color: #0a1938;
  }
  select {
    appearance: none;
    height: 50px;
    width: 100%;
    color: #444;
    font-size: 15px;
    padding: 0.65rem 0.8rem;
    background: white;
    border: 1px solid #ebebeb;
    border-radius: 6px;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    background: url('/Assets/arrow.svg') no-repeat right #fff;
    option {
      font-family: 'Nunito', sans-serif;
    }
    :hover {
      cursor: pointer;
    }
  }
`;

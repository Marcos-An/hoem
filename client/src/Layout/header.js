import React from 'react';
import { ButtonLogin } from '../Components/Buttons';
import { Header, Logo } from './Styles/header';

const Head = () => {
  return (
    <Header>
      <Logo />
      <nav>
        <ul>
          <li>
            <a href="#"> Inicio </a>
          </li>
          <li>
            <a href="#"> Imoveis </a>
          </li>
          <li>
            <a href="#"> Agentes </a>
          </li>
          <li>
            <a href="#"> Contato </a>
          </li>
        </ul>
      </nav>
      <ButtonLogin> Login / Registo</ButtonLogin>
    </Header>
  );
};

export default Head;

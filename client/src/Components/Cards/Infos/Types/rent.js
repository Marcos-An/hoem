import React from 'react';
import { PropertyPrice, PriceBox, Price } from '../styled';

function Rent(props) {
  const imovel = props.imovel;
  const preco = imovel.preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return (
    <PriceBox>
      <Price>{preco}</Price>
      &#160;
      <PropertyPrice>mensal</PropertyPrice>
    </PriceBox>
  );
}

export default Rent;

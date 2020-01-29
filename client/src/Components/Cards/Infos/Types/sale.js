import React from 'react';
import { PropertyPrice, PriceBox, Price } from '../styled';

function Sale(props) {
  const imovel = props.imovel;
  const preco = imovel.preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return (
    <PriceBox>
      <PropertyPrice>por</PropertyPrice>
      &#180;
      <Price>{preco}</Price>
    </PriceBox>
  );
}

export default Sale;

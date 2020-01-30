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
      <a href={`/imovel/${props.imovel.id_imovel}`}>
        <Price>{preco}</Price>
      </a>
    </PriceBox>
  );
}

export default Sale;

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
      <a href={`/imovel/${props.imovel.id_imovel}`}>
        <Price>{preco}</Price>
      </a>
      &#160;
      <PropertyPrice>mensal</PropertyPrice>
    </PriceBox>
  );
}

export default Rent;

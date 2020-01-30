import React from 'react';
import Cards from '../../Components/Cards';
import { CardBox, Title, BoddyCard, UpperTitle } from './styled';

function Card(props) {
  const imoveis = props.imoveis;
  return (
    <BoddyCard>
      <UpperTitle>nossos</UpperTitle>
      <Title>IMÓVEIS</Title>
      <CardBox>
        {imoveis.map((item, index) => (
          <Cards key={index} imovel={item} index={index} />
        ))}
      </CardBox>
    </BoddyCard>
  );
}

export default Card;

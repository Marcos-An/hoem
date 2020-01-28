import React, { useState, useEffect } from 'react';
import Cards from '../../Components/Cards';
import { CardBox, Title, BoddyCard, UpperTitle } from './styled';

function Card() {
  const [imoveis, setImoveis] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/api/imoveis')
      .then(response => response.json())
      .then(response => setImoveis(response.splice(0, 6)));
  }, []);
  return (
    <BoddyCard>
      <UpperTitle>nossos</UpperTitle>
      <Title>IMÓVEIS</Title>
      <CardBox>
        {imoveis.map(index => (
          <Cards key={index} />
        ))}
      </CardBox>
    </BoddyCard>
  );
}

export default Card;

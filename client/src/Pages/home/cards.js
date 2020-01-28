import React, { useState, useEffect } from 'react';
import Cards from '../../Components/Cards';
import { CardBox, Title, BoddyCard, UpperTitle } from './styled';

const API_URL = '/api/imovel';

function Card() {
  const [imoveis, setImoveis] = useState([]);

  useEffect(() => {
    callApi()
      .then(result => setImoveis(result.splice(0, 6)))
      .catch(() => console.log('Error'));
  }, []);

  const callApi = async () => {
    const response = await fetch(API_URL);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };
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

import React, { useState, useEffect } from 'react';
import { BoddyCard, CardBox } from './styledSimilares';
import Cards from '../../../Components/Cards';

const API_URL = '/api/imoveis/similares/';

function PropriedadesSimilares(props) {
  const FINALIDADE = props.imovel.finalidade;
  const [imoveis, setImoveis] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}${FINALIDADE}`)
      .then(result => result.json())
      .then(result => setImoveis(result.slice(0, 6)))
      .catch(() => console.log('Error'));
  }, [FINALIDADE]);

  return (
    <BoddyCard>
      <CardBox>
        {imoveis.map((item, index) => (
          <Cards key={index} imovel={item} index={index} />
        ))}
      </CardBox>
    </BoddyCard>
  );
}

export default PropriedadesSimilares;

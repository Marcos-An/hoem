import React, { useState, useEffect } from 'react';
import BasicInfo from './basicInfo';
import { Body } from './styled';

const API_URL = '/api/imoveis/';

export default function Imovel(props) {
  const ID = props.match.params.id_imovel;
  const [imovel, setImovel] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}${ID}`)
      .then(result => result.json())
      .then(result => setImovel(result))
      .catch(() => console.log('Error'));
  }, [ID]);

  return (
    <Body>
      <BasicInfo imovel={imovel} />
    </Body>
  );
}

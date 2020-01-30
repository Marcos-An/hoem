import React, { useState, useEffect } from 'react';

const API_URL = '/api/imoveis/';

export default function Imovel(props) {
  const ID = props.match.params.id_imovel;
  const [imovel, setImovel] = useState([]);

  useEffect(() => {
    callApi()
      .then(result => setImovel(result))
      .catch(() => console.log('Error'));
  }, []);

  const callApi = async () => {
    const response = await fetch(`${API_URL}${ID}`);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  console.log(imovel);

  return (
    <div>
      <h1>{imovel.cidade}</h1>
    </div>
  );
}

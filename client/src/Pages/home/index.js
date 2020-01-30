import React, { useState, useEffect } from 'react';
import Slider from '../../Components/Slider';
import Search from './search';
import Cards from './cards';
import { Provider } from 'react-redux';
import store from '../../store';
import Agentes from './agentes';
import Categories from './categories';

const API_URL = '/api/imoveis';

const filter = (imoveis, setCategorias) => {
  var campos = {
    Rio: 0,
    SãoPaulo: 0,
    Venda: 0,
    Aluguel: 0
  };
  imoveis.forEach(item => {
    if (item.cidade === 'Rio de Janeiro') {
      campos.Rio += 1;
    }
    if (item.cidade === 'São Paulo') {
      campos.SãoPaulo += 1;
    }
    if (item.finalidade === 'Venda') {
      campos.Venda += 1;
    }
    if (item.finalidade === 'Venda') {
      campos.Aluguel += 1;
    }
  });
  setCategorias(campos);
};

export default function Home() {
  const [imoveis, setImoveis] = useState([]);
  const [categ, setCategorias] = useState([]);

  useEffect(() => {
    callApi()
      .then(result => setImoveis(result.splice(0, 6)))
      .catch(() => console.log('Error'));
  }, []);

  const callApi = async () => {
    const response = await fetch(API_URL);
    const body = await response.json();
    filter(body, setCategorias);
    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  return (
    <Provider store={store}>
      <Slider />
      <Search />
      <Cards imoveis={imoveis} />
      <Agentes />
      <Categories categ={categ} />
    </Provider>
  );
}

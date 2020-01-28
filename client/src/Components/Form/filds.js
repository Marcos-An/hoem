import React from 'react';
import { Fild } from './styled';
import { Button } from '../Buttons';
import { useSelector, useDispatch } from 'react-redux';
import {
  TipoField,
  CidadeField,
  FinalidadeField,
  BanheiroField,
  ComodosField,
  GaragemField,
  PrecoField
} from './Filds';

const Filds = () => {
  const imoveis = useSelector(state => state.still);
  const dispatch = useDispatch();
  function Tipo(e) {
    dispatch({ type: 'TIPO', value: e.target.value });
  }
  function Cidade(e) {
    dispatch({ type: 'CIDADE', value: e.target.value });
  }
  function Finalidade(e) {
    dispatch({ type: 'FINALIDADE', value: e.target.value });
  }
  function Comodos(e) {
    dispatch({ type: 'COMODOS', value: e.target.value });
  }
  function Banheiro(e) {
    dispatch({ type: 'BANHEIRO', value: e.target.value });
  }
  function Garagem(e) {
    dispatch({ type: 'GARAGEM', value: e.target.value });
  }
  function Preco(e) {
    dispatch({ type: 'PRECO', value: e.target.value });
  }
  return (
    <Fild>
      <TipoField imoveis={imoveis} Tipo={Tipo} />
      <CidadeField imoveis={imoveis} Cidade={Cidade} />
      <FinalidadeField imoveis={imoveis} Finalidade={Finalidade} />
      <ComodosField imoveis={imoveis} Comodos={Comodos} />
      <BanheiroField imoveis={imoveis} Banheiro={Banheiro} />
      <GaragemField imoveis={imoveis} Garagem={Garagem} />
      <PrecoField imoveis={imoveis} Preco={Preco} />
      <Button>Pesquisar</Button>
    </Fild>
  );
};

export default Filds;

import React from 'react';
import { Body, Name, Endereco, EnderecoBox, Divider } from './styled';
import Rent from './Types/rent';
import Sale from './Types/sale';
import { Point } from './icons';
import HasInHome from './hasInHome';

function Infos(props) {
  const imovel = props.imovel;
  return (
    <Body>
      {imovel.finalidade === 'Venda' ? (
        <Sale imovel={imovel} />
      ) : (
        <Rent imovel={imovel} />
      )}
      <Name>{`${imovel.tipo}, ${imovel.cidade}-${imovel.estado}`}</Name>
      <EnderecoBox>
        <Point />
        &ensp;
        <Endereco>{imovel.endereco}</Endereco>
      </EnderecoBox>
      <Divider />
      <HasInHome imovel={imovel} />
    </Body>
  );
}

export default Infos;

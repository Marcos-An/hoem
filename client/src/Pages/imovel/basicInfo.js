import React from 'react';
import Icons from './icons';
import { Point } from './icons/icons';
import {
  BasicInfo,
  Title,
  Box,
  Endereco,
  Preco,
  Divider,
  PropertyPrice
} from './styled';

const Info = props => {
  const imovel = props.imovel;
  var preco = '';
  const setPreco = () => {
    preco = imovel.preco.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  return (
    <div>
      {imovel.preco === undefined ? null : setPreco()}
      <BasicInfo>
        <Box>
          <Title>{`${imovel.tipo}, ${imovel.cidade}-${imovel.estado}`}</Title>
          <Endereco>
            <Point />
            &ensp;
            {imovel.endereco}
          </Endereco>
        </Box>
        <Box>
          <PropertyPrice>
            {imovel.finalidade === 'Venda' ? 'por' : 'mensal'}
          </PropertyPrice>
          <Preco>{preco}</Preco>
        </Box>
      </BasicInfo>
      <Divider />
      <BasicInfo>
        <Box>
          <Icons imovel={imovel} />
        </Box>
        <Box></Box>
      </BasicInfo>
    </div>
  );
};

export default Info;

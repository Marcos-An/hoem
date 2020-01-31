import React from 'react';
import Icons from './icons';
import { Point } from './icons/icons';
import { BasicInfo, Title, Box, Endereco, Preco } from './styled';

const Info = props => {
  const imovel = props.imovel;
  const preco = imovel.preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  return (
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
        <Preco>{preco}</Preco>
        <Icons imovel={imovel} />
      </Box>
    </BasicInfo>
  );
};

export default Info;

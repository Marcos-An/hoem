import React from 'react';
import { Divider } from '../styled';
import Icons from './infosIcons';
import Imoveis from '../imoveisSilimares';
import {
  Body,
  Box,
  Title,
  IdTitle,
  Id,
  SubTitle,
  Text,
  Infos,
  Similares
} from './styledInfo';

function Info(props) {
  const imovel = props.imovel;

  return (
    <Body>
      <Infos>
        <Box>
          <Title>Descrição da propiedade</Title>
          <IdTitle>
            ID: &ensp;<Id>{imovel.id_imovel}</Id>
          </IdTitle>
          <Divider />
          &ensp;
          <SubTitle>Descrição</SubTitle>
          <Text>{imovel.sobre}</Text>
          &emsp;&ensp;
          <SubTitle>Iformações</SubTitle>
          <Icons imovel={props.imovel} />
        </Box>
        <Box />
      </Infos>
      <Similares>
        <SubTitle>Imoveis similares</SubTitle>
        <Divider />
        <Imoveis imovel={imovel} />
      </Similares>
    </Body>
  );
}

export default Info;

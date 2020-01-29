import React from 'react';
import { Body, Text } from './styledIconsHas';
import { Cama, Bath, Build, Car } from './icons';

function HasInHome(props) {
  const imovel = props.imovel;
  return (
    <Body>
      <Cama />
      &ensp;
      <Text>{imovel.dormitorio}</Text>
      &emsp; &emsp;
      <Bath />
      &ensp;
      <Text>{imovel.banheiro}</Text>
      &emsp; &emsp;
      <Build />
      &ensp;
      <Text>{imovel.comodos}</Text>
      &emsp; &emsp;
      <Car />
      &ensp;
      <Text>{imovel.dormitorio}</Text>
    </Body>
  );
}

export default HasInHome;

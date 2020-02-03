import React from 'react';
import { Body, Text, Box } from './styled';
import { Cama, Bath, Build, Car } from './icons';

function HasInHome(props) {
  const imovel = props.imovel;
  return (
    <Body>
      <Box>
        <Cama />
        &emsp;
        <Text>{`${imovel.dormitorio} - Dormitórios`}</Text>
      </Box>
      <Box>
        <Bath />
        &emsp;
        <Text>{`${imovel.banheiro} - Banheios`}</Text>
      </Box>
      <Box>
        <Build />
        &emsp;
        <Text>{`${imovel.comodos} - Comodos`}</Text>
      </Box>
      <Box>
        <Car />
        &emsp;
        <Text>{`${imovel.garagem} - Garagens`}</Text>
      </Box>
    </Body>
  );
}

export default HasInHome;

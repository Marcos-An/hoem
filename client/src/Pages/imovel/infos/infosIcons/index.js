import React from 'react';
import { Body, Text, Box, Title } from './styled';
import { Cama, Bath, Build, Car } from '../../icons/icons';

function HasInHome(props) {
  const imovel = props.imovel;
  return (
    <Body>
      <Box>
        <Title>Tipo:</Title>
        <Text>{imovel.finalidade}</Text>
      </Box>
      <Box>
        <div>
          <Cama />
          &emsp;
          <Text>Dormitórios:</Text>
        </div>
        <Text>{imovel.dormitorio}</Text>
      </Box>
      <Box>
        <div>
          <Bath />
          &emsp;
          <Text>Banheios:</Text>
        </div>
        <Text>{imovel.banheiro}</Text>
      </Box>
      <Box>
        <div>
          <Build />
          &emsp;
          <Text>Comodos:</Text>
        </div>
        <Text>{imovel.comodos}</Text>
      </Box>
      <Box>
        <div>
          <Car />
          &emsp;
          <Text>Garagens:</Text>
        </div>
        <Text>{imovel.garagem}</Text>
      </Box>
    </Body>
  );
}

export default HasInHome;

import React from 'react';
import { Title, SubTitle, UpperTitle, Box } from './styled';
import { ButtonWhite } from '../Buttons';

const Text = () => {
  return (
    <Box>
      <UpperTitle> Prontos Para Descobrir </UpperTitle>
      <Title> A Casa Perfeita Para Você</Title>
      <SubTitle>
        Com um catálago completo de casas para venda e aluguel!
      </SubTitle>
      <ButtonWhite>Entre em contato</ButtonWhite>
    </Box>
  );
};

export default Text;

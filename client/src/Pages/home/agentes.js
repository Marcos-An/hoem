import React from 'react';
import { Agentes, Welcome, SubTitle } from './styled';
import { ButtonWhite } from '../../Components/Buttons';

const image =
  'http://demo2.themelexus.com/housey/wp-content/uploads/2019/07/h1-bg02.jpg';

function ourAgentes() {
  return (
    <Agentes img={image}>
      <Welcome style={{ color: 'white' }}>Temos um time capacitado</Welcome>
      <SubTitle>
        nossa equipe é altamente capacitada e pronta para atendelo
      </SubTitle>
      <ButtonWhite>Conheça mais</ButtonWhite>
    </Agentes>
  );
}

export default ourAgentes;

import React, { useState } from 'react';
import { Body, Img, BoxIcon, Modal, Images } from './styled';
import LeftArrow from '../Arrows/leftArrow';
import RightArrow from '../Arrows/rightArrow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faTimes } from '@fortawesome/free-solid-svg-icons';

const openTab = index => {
  var Modal = document.getElementsByClassName('Modal');
  Modal[index].style.display = 'flex';
};
const closeTab = index => {
  var Modal = document.getElementsByClassName('Modal');
  Modal[index].style.display = 'none';
};

function Cards(props) {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index === props.imovel.imagens.length - 1) {
      setIndex(0);
    }
    if (index >= 0) {
      setIndex(index + 1);
    }
  };
  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  return (
    <Body>
      <Img img={props.imovel.imagens[0]} />
      <BoxIcon onClick={() => openTab(props.index)}>
        <FontAwesomeIcon
          icon={faCamera}
          style={{ fontSize: 18, color: 'white' }}
        />
      </BoxIcon>
      <Modal className="Modal">
        <FontAwesomeIcon
          className="close"
          icon={faTimes}
          onClick={() => closeTab(props.index)}
        />
        <LeftArrow prev={prev} index={index} />
        <Images img={props.imovel.imagens[index]} />
        <RightArrow
          next={next}
          item={props.imovel.imagens.length}
          index={index}
        />
      </Modal>
    </Body>
  );
}

export default Cards;

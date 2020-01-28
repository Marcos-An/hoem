import React, { useState } from 'react';
import LeftArrow from '../Arrows/leftArrow';
import RightArrow from '../Arrows/rightArrow';
import { Slide } from './styled';
import Texts from './texts';

const Slider = () => {
  const image = [
    'http://demo2.themelexus.com/housey/wp-content/uploads/2019/08/h2-slider01.jpg',
    'http://demo2.themelexus.com/housey/wp-content/uploads/2019/05/h1-slider2.jpg'
  ];
  const [images] = useState(image);
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index >= 0) {
      setIndex(index + 1);
    }
    if (index === images.length - 1) {
      setIndex(0);
    }
  };
  const prev = index => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  return (
    <Slide image={images[index]}>
      <LeftArrow prev={prev} />
      <Texts />
      <RightArrow next={next} />
    </Slide>
  );
};

export default Slider;

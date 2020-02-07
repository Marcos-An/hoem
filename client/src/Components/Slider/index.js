import React, { useState } from 'react';
import { Slide } from './styled';
import Texts from './texts';

const Slider = () => {
  const image =
    'http://demo2.themelexus.com/housey/wp-content/uploads/2019/08/h2-slider01.jpg';

  const [images] = useState(image);

  return (
    <Slide image={images}>
      <Texts />
    </Slide>
  );
};

export default Slider;

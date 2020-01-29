import React from 'react';
import { Body } from './styled';

function Index() {
  const image =
    'http://demo2.themelexus.com/housey/wp-content/uploads/2019/08/h2-bg01.jpg';
  return (
    <Body img={image}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Body>
  );
}

export default Index;

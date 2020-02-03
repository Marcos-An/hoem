import React, { useState, useEffect } from 'react';
import { Body, Thumb, Imagens } from './styledGaleria';

export default function Galeria(props) {
  var imagens = props.imagens;
  const [index, setIndex] = useState(0);
  const setImagens = () => {
    imagens = props.imagens;
  };
  useEffect(() => {
    setIndex(index);
  }, [index]);

  return (
    <>
      {imagens === undefined ? (
        setImagens()
      ) : (
        <Body>
          <img src={imagens[index]} alt=" " />
          <Imagens>
            {imagens.map((item, i) => (
              <>
                <Thumb img={item} onClick={() => setIndex(i)}>
                  <div />
                </Thumb>
              </>
            ))}
          </Imagens>
        </Body>
      )}
    </>
  );
}

import React from 'react';
import { Arrow, ArrowNone } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const LeftArrow = props => {
  return (
    <>
      {props.index === 0 ? (
        <ArrowNone>
          <FontAwesomeIcon className="arrow" icon={faChevronLeft} />
        </ArrowNone>
      ) : (
        <Arrow onClick={() => props.prev()}>
          <FontAwesomeIcon className="arrow" icon={faChevronLeft} />
        </Arrow>
      )}
    </>
  );
};

export default LeftArrow;

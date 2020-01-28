import React from 'react';
import { Arrow, ArrowNone } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const LeftArrow = props => {
  return (
    <>
      {props.index === 0 ? (
        <ArrowNone>
          <FontAwesomeIcon
            icon={faChevronLeft}
            style={{ fontSize: 25, color: 'white' }}
          />
        </ArrowNone>
      ) : (
        <Arrow onClick={() => props.prev()}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            style={{ fontSize: 25, color: 'white' }}
          />
        </Arrow>
      )}
    </>
  );
};

export default LeftArrow;

import React from 'react';
import { Arrow, ArrowNone } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const RightArrow = props => {
  return (
    <>
      {props.index + 1 === props.item ? (
        <ArrowNone>
          <FontAwesomeIcon
            icon={faChevronRight}
            style={{ fontSize: 25, color: 'white' }}
          />
        </ArrowNone>
      ) : (
        <Arrow onClick={() => props.next()}>
          <FontAwesomeIcon
            icon={faChevronRight}
            style={{ fontSize: 25, color: 'white' }}
          />
        </Arrow>
      )}
    </>
  );
};

export default RightArrow;

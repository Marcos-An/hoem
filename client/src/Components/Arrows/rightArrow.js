import React from 'react';
import { Arrow, ArrowNone } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const RightArrow = props => {
  return (
    <>
      {props.index + 1 === props.item ? (
        <ArrowNone>
          <FontAwesomeIcon className="arrow" icon={faChevronRight} />
        </ArrowNone>
      ) : (
        <Arrow onClick={() => props.next()}>
          <FontAwesomeIcon className="arrow" icon={faChevronRight} />
        </Arrow>
      )}
    </>
  );
};

export default RightArrow;

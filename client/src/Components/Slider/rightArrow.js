import React from 'react';
import { Arrow } from './Styles/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const RightArrow = props => {
  return (
    <Arrow onClick={() => props.next()}>
      <FontAwesomeIcon
        icon={faChevronRight}
        style={{ fontSize: 25, color: 'white' }}
      />
    </Arrow>
  );
};

export default RightArrow;

import React from 'react';
import { Arrow } from './Styles/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const LeftArrow = props => {
  return (
    <Arrow onClick={() => props.prev()}>
      <FontAwesomeIcon
        icon={faChevronLeft}
        style={{ fontSize: 25, color: 'white' }}
      />
    </Arrow>
  );
};

export default LeftArrow;

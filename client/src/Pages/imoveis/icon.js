import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

export const FilterIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faFilter}
      style={{ color: '#6f42c1', fontSize: 15, marginRight: 5 }}
    />
  );
};

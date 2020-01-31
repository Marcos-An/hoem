import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faBed,
  faBath,
  faBuilding,
  faCarAlt
} from '@fortawesome/free-solid-svg-icons';

export const Point = () => {
  return (
    <FontAwesomeIcon
      icon={faMapMarkerAlt}
      style={{ color: '#6923e7', fontSize: 16 }}
    />
  );
};

export const Cama = () => {
  return (
    <FontAwesomeIcon icon={faBed} style={{ color: '#7e7e7e', fontSize: 16 }} />
  );
};
export const Bath = () => {
  return (
    <FontAwesomeIcon icon={faBath} style={{ color: '#7e7e7e', fontSize: 16 }} />
  );
};

export const Build = () => {
  return (
    <FontAwesomeIcon
      icon={faBuilding}
      style={{ color: '#7e7e7e', fontSize: 16, margin: -4 }}
    />
  );
};

export const Car = () => {
  return (
    <FontAwesomeIcon
      icon={faCarAlt}
      style={{ color: '#7e7e7e', fontSize: 16, margin: -4 }}
    />
  );
};

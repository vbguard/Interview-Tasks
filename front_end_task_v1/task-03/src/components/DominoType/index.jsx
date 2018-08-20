import React from 'react';
import PropTypes from 'prop-types';

const DominoType = ({ type }) => {
  const path = `/images/icon/dots.svg#${type}`;
  return (
    <svg>
      <use href={path} />
    </svg>
  );
};

DominoType.propTypes = {
  type: PropTypes.string.isRequired,
};

export default DominoType;

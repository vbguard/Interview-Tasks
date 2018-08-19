import React from 'react';
// import PropTypes from 'prop-types';
import Select from 'react-select';
import InputRange from 'react-input-range';

const ControllBar = props => {
  // eslint-disable-next-line
  console.log('some i debug', props);
  return (
    <div>
      <Select />
      <InputRange />
      <input
        type="range"
        name="Speed"
        id="speed"
        min="0"
        max="5"
        value={props}
        onChange={props}
        step="1"
      />
    </div>
  );
};

ControllBar.propTypes = {};

export default ControllBar;

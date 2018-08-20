import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
// import InputRange from 'react-input-range';
// import inputStyle from 'react-input-range/lib/css/index.css';
import styles from './styles.css';

const ControllBar = ({
  inputSizeValue,
  onChangeSize,
  handleRotateLeft,
  handleRotateRight,
  handleReset,
  inputSpeedRotateValue,
  onChangeSpeedRotate,
  selectValue,
  onChangeSelect,
  selectOptions,
}) => (
  <div className={styles.controllBar}>
    <div className={styles.buttonSection}>
      <button
        type="button"
        className={styles.btnLeft}
        onClick={handleRotateLeft}
      >
        Rotate Left
      </button>
      <button
        type="button"
        className={(styles.btn, styles.btnReset)}
        onClick={handleReset}
      >
        Reset
      </button>
      <button
        type="button"
        className={styles.btnRight}
        onClick={handleRotateRight}
      >
        Rotate Right
      </button>
    </div>
    <Select
      value={selectValue}
      onChange={onChangeSelect}
      options={selectOptions}
    />
    <label htmlFor="sizeDomino" className={styles.labelSize}>
      Domino Size
      <div className={styles.inputWrap}>
        <input
          type="range"
          name="size"
          id="sizeDomino"
          min="0"
          max="100"
          value={inputSizeValue}
          onChange={onChangeSize}
          step="1"
        />
      </div>
    </label>
    <label htmlFor="speedRotateDomino" className={styles.labelSpeed}>
      Domino rotate speed
      <div className={styles.inputWrap}>
        <input
          type="range"
          name="Speed"
          id="speedRotateDomino"
          min="0"
          max="19"
          value={inputSpeedRotateValue}
          onChange={onChangeSpeedRotate}
          step="1"
        />
      </div>
    </label>
  </div>
);

ControllBar.propTypes = {
  inputSizeValue: PropTypes.string.isRequired,
  onChangeSize: PropTypes.func.isRequired,
  handleRotateLeft: PropTypes.func.isRequired,
  handleRotateRight: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  inputSpeedRotateValue: PropTypes.string.isRequired,
  onChangeSpeedRotate: PropTypes.func.isRequired,
  selectValue: PropTypes.string,
  onChangeSelect: PropTypes.func.isRequired,
  selectOptions: PropTypes.arrayOf(PropTypes.shape),
};

ControllBar.defaultProps = {
  selectValue: '',
  selectOptions: [],
};

export default ControllBar;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './styles.css';
import DominoType from '../DominoType';
import { RotateLeft, RotateRight } from './keyframes';

const Domino = ({ size, turn, speed, sized, isAnimated, selectedType }) => {
  const toWichTurn = turn === 'left' ? RotateLeft : RotateRight;

  const dominoSize = () => `
    width: ${size.width + Number(sized)}px;
    height: ${size.height + Number(sized) * 2}px;
  `;
  const dominoAnimation = () =>
    isAnimated
      ? `animation: ${toWichTurn} infinite ${20 - speed}s linear`
      : null;

  const DominoBox = styled.div`
    border: 1px solid #000;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 0 3px #000;
    padding: 0.25%;
    ${dominoSize};
    ${dominoAnimation};
  `;

  return (
    <div className={styles.dominoWrap}>
      <DominoBox>
        <div className={styles.dominoTop}>
          <DominoType type={selectedType.top} />
        </div>
        <div className={styles.dominoBottom}>
          <DominoType type={selectedType.bottom} />
        </div>
      </DominoBox>
    </div>
  );
};

Domino.propTypes = {
  size: PropTypes.shape().isRequired,
  turn: PropTypes.string,
  speed: PropTypes.string.isRequired,
  sized: PropTypes.string.isRequired,
  isAnimated: PropTypes.bool.isRequired,
  selectedType: PropTypes.shape(),
};

Domino.defaultProps = {
  turn: '',
  selectedType: null,
};

export default Domino;

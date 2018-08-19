import React from 'react';
// import PropTypes from 'prop-types';
import styles from './styles.css';

const Domino = props => {
  // eslint-disable-next-line
  console.log(props);

  return (
    <div className={styles.dominoWrap}>
      <div className={styles.dominoBox}>It Domino</div>
    </div>
  );
};

// Domino.propTypes = {};

export default Domino;

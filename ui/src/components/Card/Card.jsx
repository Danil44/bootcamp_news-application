import React from 'react';
import styles from './Card.module.css';
import PropTypes from 'prop-types';

export default function Card({ children }) {
  return <div className={styles.card}>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node,
};

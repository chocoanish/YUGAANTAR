import React from 'react';
import styles from './CountDown.module.css'

interface CountdownItemProps {
  value: string;
  label: string;
}

const CountdownItem: React.FC<CountdownItemProps> = ({ value, label }) => {
  return (
    <div className={styles.countdownItem}>
      <div className={styles.countdownValue}>{value}</div>
      <div className={styles.countdownLabel}>{label}</div>
    </div>
  );
};

export default CountdownItem;
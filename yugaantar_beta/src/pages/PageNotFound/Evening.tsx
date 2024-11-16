import React from 'react';
import styles from './Evening.module.css';

const Sun: React.FC = () => {
  return (
    <div className={styles.sunContainer}>
      <div className={styles.sunGlowOuter} />
      <div className={styles.sunGlowMiddle} />
      <div className={styles.sun}>
        <div className={styles.sunInnerGlow} />
      </div>
    </div>
  );
};


const Evening = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sky}>
        <Sun />
      </div>
      <div className={styles.mountains}>
        <div className={styles.mountainBack} />
        <div className={styles.mountainMiddle} />
        <div className={styles.mountainFront} />
      </div>
      <div className={styles.water}>
        <div className={styles.waterReflection} />
        {[...Array(4)].map((_, index) => (
          <div 
            key={index}
            className={styles.waterRipple}
            style={{ animationDelay: `${index * 1.5}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Evening;
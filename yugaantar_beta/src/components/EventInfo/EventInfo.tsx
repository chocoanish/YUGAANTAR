import React from 'react';
import styles from './EventInfo.module.css';

interface EventInfoProps {
  iconSrc: string;
  text: string;
  alt: string;
}

const EventInfo: React.FC<EventInfoProps> = ({ iconSrc, text, alt }) => {
  return (
    <div className={styles.infoItem}>
      <img loading="lazy" src={iconSrc} alt={alt} className={styles.infoIcon} />
      <div className={styles.infoText}>{text}</div>
    </div>
  );
};

export default EventInfo;
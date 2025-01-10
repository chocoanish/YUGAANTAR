import React, { useState } from 'react';
import styles from './Card.module.css';

interface CardProps {
  name: string;
  role: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ name, role, description }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={`${styles.card} ${flipped ? styles.flipped : ''}`}
      onClick={handleClick}
    >
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <div className={styles.profile}>
            <div className={styles.profileImage} />
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.role}>{role}</p>
          </div>
        </div>
        <div className={styles.cardBack}>
          <div className={styles.description}>
            <h3 className={styles.title}>Scaler School of Technology's</h3>
            <p className={styles.text}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
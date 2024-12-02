import React, { useEffect, useState } from 'react';
import styles from './Stars.module.css';

interface StarProps {
  top: string;
  left: string;
  size: number;
  delay: number;
}

const Star: React.FC<StarProps> = ({ top, left, size, delay }) => {
  const style = {
    top,
    left,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${delay}s`,
  };

  return (
    <div
      className={styles.star}
      style={style}
    />
  );
};

const Moon: React.FC = () => {
  return (
    <div className={styles.moonContainer}>
      <div className={styles.moon}>
        <div className={styles.moonOverlay} />
        <div className={`${styles.crater} ${styles.crater1}`} />
        <div className={`${styles.crater} ${styles.crater2}`} />
        <div className={`${styles.crater} ${styles.crater3}`} />
      </div>
      <div className={styles.moonGlow} />
    </div>
  );
};

const generateRandomStar = (): StarProps & { key: number } => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: Math.random() * 2 + 1,
  delay: Math.random() * 3,
  key: Math.random(),
});

const Stars = () => {
  const [stars, setStars] = useState<(StarProps & { key: number })[]>([]);

  useEffect(() => {
    const initialStars = Array.from({ length: 100 }, generateRandomStar);
    setStars(initialStars);

    const interval = setInterval(() => {
      setStars(prev => {
        if (prev.length < 150) {
          return [...prev, generateRandomStar()];
        }
        return prev;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <Moon />
      {stars.map(star => (
        <Star
          key={star.key}
          top={star.top}
          left={star.left}
          size={star.size}
          delay={star.delay}
        />
      ))}
    </div>
  );
};

export default Stars;
import React, { useState, useEffect } from 'react';
import { Home } from 'lucide-react';
import styles from './PageNotFound.module.css';

// import Clouds from './Clouds';
// import Evening from './Evening';
import Stars from './Stars'

const PageNotFound: React.FC = () => {
  const [position, setPosition] = useState(0);
  const [isMovingRight, setIsMovingRight] = useState(true);

  const [timeOfDay, setTimeOfDay] = useState<'morning' | 'evening' | 'night'>('morning');

  useEffect(() => {
    const updateTimeOfDay = () => {
      // const currentHour = new Date().getHours();
      const currentHour = 20;
      console.log(currentHour)
      
      let newTimeOfDay: 'morning' | 'evening' | 'night';
      if (currentHour >= 6 && currentHour < 12) {
        newTimeOfDay = 'morning';
      } else if (currentHour >= 12 && currentHour < 18) {
        newTimeOfDay = 'evening';
      } else {
        newTimeOfDay = 'night';
      }

      if (newTimeOfDay !== timeOfDay) {
        setTimeOfDay(newTimeOfDay);
      }
    };

    updateTimeOfDay();

    const interval = setInterval(updateTimeOfDay, 60000);

    return () => clearInterval(interval);
  }, [timeOfDay]);

  const backgroundClass = styles[timeOfDay]; 
  
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => {
        const step = 0.013; 
        if (isMovingRight) {
          if (prev >= 1) {
            setIsMovingRight(false);
            return 1 - step;
          }
          return prev + step;
        } else {
          if (prev <= 0) {
            setIsMovingRight(true);
            return 0 + step;
          }
          return prev - step;
        }
      });
    }, 16);

    return () => clearInterval(interval);
  }, [isMovingRight]);

  const getLetterColor = (index: number) => {
    const text = "Not Found";
    const distanceFromPeak = Math.abs(position - (index / (text.length - 1)));
    const intensity = Math.max(0, 1 - distanceFromPeak * 2);
    
    const r = Math.round(102 + (187 - 102) * intensity);
    const g = Math.round(102 + (216 - 102) * intensity);
    const b = Math.round(102 + (104 - 102) * intensity);
    
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div className={`${styles.container} ${backgroundClass}`}>
      {/* <Clouds />  */}
      {/* <Evening /> */}
      <Stars />
      <div className={styles.content}>
        <div className={styles.numberLeft}>4</div>
        <img src="./404.svg" alt="404" className={styles.image} />
        <div className={styles.numberRight}>4</div>
      </div>
      
      <div className={styles.notFoundText}>
        {"Not Found".split('').map((char, index) => (
          <span
            key={index}
            style={{
              WebkitTextStroke: `2px ${getLetterColor(index)}`,
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              transition: 'color 100ms'
            }}
          >
            {char}
          </span>
        ))}
      </div>

      <p className={styles.message}>
        We searched the galaxy but couldn’t find what you’re looking for.
        Maybe it’s floating somewhere in the cosmos... 🌌
        <br />
        Beam yourself back to safety:
      </p>

      <a className={styles.btn} href="/">
        <Home className={styles.icon} />
        <span className={styles.text}>
          <i>G</i><i>o</i>
          <span className={styles.space}></span>
          <i>H</i><i>o</i><i>m</i><i>e</i>
        </span>
      </a>
    </div>
  );
};

export default PageNotFound;
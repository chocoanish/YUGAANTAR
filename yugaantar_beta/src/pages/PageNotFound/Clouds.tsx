import React, { useEffect, useState } from 'react';
import styles from './Clouds.module.css';

interface CloudProps {
  speed: number;
  delay: number;
  direction: 'left' | 'right';
  opacity: number;
  scale: number;
  top: string;
  cloudType: number;
}

const Cloud: React.FC<CloudProps> = ({ speed, delay, direction, opacity, scale, top, cloudType }) => {
  const style = {
    top,
    opacity,
    transform: `scale(${scale})`,
    animation: `${styles.moveCloud} ${speed}s linear ${delay}s infinite ${direction === 'left' ? 'normal' : 'reverse'}`,
  };

  return (
    <img 
      className={styles.cloud} 
      src={`./Cloud_${cloudType}.svg`} 
      alt="" 
      style={style}
    />
  );
};

interface CloudData extends CloudProps {
  key: number;
}

const generateRandomCloud = (): CloudData => ({
  speed: Math.random() * 40 + 20, 
  delay: Math.random() * -20, 
  direction: Math.random() > 0.5 ? 'left' : 'right',
  opacity: Math.random() * 0.5 + 0.1,
  scale: Math.random() * 0.5 + 0.5,
  top: `${Math.random() * 75}%`,
  cloudType: Math.floor(Math.random() * 3) + 1, 
  key: Math.random(),
});

const Clouds = () => {
  const [clouds, setClouds] = useState<CloudData[]>([]);

  useEffect(() => {
    const initialClouds = Array.from({ length: 8 }, generateRandomCloud);
    setClouds(initialClouds);

    const interval = setInterval(() => {
      setClouds(prev => {
        if (prev.length < 12) { 
          return [...prev, generateRandomCloud()];
        }
        return prev;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      {clouds.map(cloud => (
        <Cloud 
          key={cloud.key}
          speed={cloud.speed}
          delay={cloud.delay}
          direction={cloud.direction}
          opacity={cloud.opacity}
          scale={cloud.scale}
          top={cloud.top}
          cloudType={cloud.cloudType}
        />
      ))}
    </div>
  );
};

export default Clouds;
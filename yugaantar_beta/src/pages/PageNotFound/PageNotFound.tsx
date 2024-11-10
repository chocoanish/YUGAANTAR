import React from 'react';
import { Home } from 'lucide-react'; 
import styles from './PageNotFound.module.css';

const PageNotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.numberLeft}>
          4
        </div>
        
        <img 
          src="./404.svg" 
          alt="404" 
          className={styles.image}
        />
        
        <div className={styles.numberRight}>
          4
        </div>
      </div>
      <div className={styles.notFoundText}>
        Not Found
      </div>

      <a className={styles.btn} href="#link">
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
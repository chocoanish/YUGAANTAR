import React, { useEffect } from 'react';
import { scrollStore } from '../../store/scrollStore';
import { cardsData } from '../../Content/CardData';
import styles from './AboutUs.module.css';
import Navbar from '../../components/Navbar/Navbar';


const AboutUs: React.FC = () => {
    const { scrollPosition, setScrollPosition } = scrollStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setScrollPosition]);



return(
  <>
    <div className={styles.container}>
    <div className={styles.navbarWrapper}>
        <Navbar />
      </div>
      

      {cardsData.map((card, index) => {
        const threshold = index * window.innerHeight;
        const isVisible = scrollPosition >= threshold;
        
        return (
          <div
            key={card.id}
            className={styles.card}
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
              zIndex: index,
            }}
          >
            <div className={styles.gradientBackground}></div>
            
            <div className={styles.cardContent}>
              <div className={styles.contentWrapper}>
                <div className={styles.flexContainer}>
                  <div className={styles.leftContent}>
                    <p className={styles.meetOur}>Meet Our</p>
                    <h2 className={styles.title}>{card.title}</h2>
                    <p className={styles.description}>{card.content}</p>
                    <button className={styles.button}>
                      Team Members
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  <div className={styles.rightContent}>
                    <div className={`${styles.circle} ${styles[card.circleColor]}`}></div>
                    <div className={styles.imageContainer}>
                      <img
                        src={card.image}
                        alt={card.title}
                        className={styles.image}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      
      <div style={{ height: `${cardsData.length * 100}vh` }} />
    </div>
  </>
)
}

export default AboutUs
import React, { useEffect } from 'react';
import styles from './Home.module.css';
import CountdownItem from '../../components/CountDown/CountDown';
import EventInfo from '../../components/EventInfo/EventInfo';
import { useCountdownStore } from '../../store/countDown';

const YugaantarFest: React.FC = () => {
  const navItems = ['Events', 'Timeline', 'Sponsors', 'Contact Us'];
  const { days, hours, minutes, seconds, calculateTimeLeft } = useCountdownStore();

  useEffect(() => {
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const countdownItems = [
    { value: days.toString(), label: 'DAYS' },
    { value: hours.toString(), label: 'HOURS' },
    { value: minutes.toString(), label: 'MINUTES' },
    { value: seconds.toString(), label: 'SECONDS' },
  ];

  return (
    <main className={styles.landingPage}>
      <header className={styles.header}>
        <img loading="lazy" src="./YugaantarLogo.svg" alt="Yugaantar Fest Logo" className={styles.logo} />
        <nav className={styles.nav}>
          {navItems.map((item, index) => (
            <a key={index} href={`#${item.toLowerCase().replace(' ', '-')}`} className={styles.navLink}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <h1 className={styles.festTitle}>
        <span>Bangalore's most awaited </span>
        <span className={styles.underlinedText}>Tech Fest</span>
      </h1>
      <h2 className={styles.festName}>Yugaantar</h2>
      <p className={styles.festYear}>SST FEST 2025</p>
      <p className={styles.festDescription}>
        <span className={styles.highlightedText}>Scaler School of Technology's </span>
        premier Technology and Cultural Festival with live events, exciting prize pools and networking opportunities with top industry professionals.
      </p>

      <button className={styles.primaryButton}>Book Tickets</button>
      <button className={styles.secondaryButton}>Explore Events</button>

      <img className={styles.blue_background} src="./Ellipse.svg" alt=""/>
      <section className={styles.eventInfo}>
        <EventInfo iconSrc="./Calendar.svg" text="January 1 & 2, 2025" alt="Calendar icon" />
        <EventInfo iconSrc="./MapPin.svg" text="Scaler Campus, Electronic City" alt="Location icon" />
      </section>

      <section className={styles.countdown}>
        {countdownItems.map((item, index) => (
          <CountdownItem key={index} value={item.value} label={item.label} />
        ))}
      </section>
    </main>
  );
};

export default YugaantarFest;
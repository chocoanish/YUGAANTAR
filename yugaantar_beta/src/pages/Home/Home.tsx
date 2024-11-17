import React, { useEffect } from "react";
import styles from "./Home.module.css";
import CountdownItem from "../../components/CountDown/CountDown";
import EventInfo from "../../components/EventInfo/EventInfo";
import { useCountdownStore } from "../../store/countDown";

import Navbar from "../../components/Navbar/Navbar";

const YugaantarFest: React.FC = () => {
  const { days, hours, minutes, seconds, calculateTimeLeft } =
    useCountdownStore();

  useEffect(() => {
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const countdownItems = [
    { value: days.toString(), label: "DAYS" },
    { value: hours.toString(), label: "HOURS" },
    { value: minutes.toString(), label: "MINUTES" },
    { value: seconds.toString(), label: "SECONDS" },
  ];

  return (
    <>
    <div className={styles.background}>
      <img className={styles.blue_gradient} src="./Ellipse.svg" alt="" />
      </div>
      <main className={styles.landingPage}>
        <Navbar />
        <div className={styles.container}>
        <h1 className={styles.festTitle}>
          <span>Bangalore's most awaited </span>
          <span className={styles.underlinedText}>Tech Fest</span>
        </h1>
        <h2 className={styles.festName}>Yugaantar</h2>
        <p className={styles.festYear}>SST FEST 2025</p>
        <p className={styles.festDescription}>
          <span className={styles.highlightedText}>
            Scaler School of Technology's{" "}
          </span>
          premier Technology and Cultural Festival with live events, exciting
          prize pools and networking opportunities with top industry
          professionals.
        </p>

        <button className={styles.primaryButton}>Book Tickets</button>
        <button className={styles.secondaryButton}>Explore Events</button>

        <section className={styles.eventInfo}>
          <EventInfo
            iconSrc="./Calendar.svg"
            text="January 1 & 2, 2025"
            alt="Calendar icon"
          />
          <EventInfo
            iconSrc="./MapPin.svg"
            text="Scaler Campus, Electronic City"
            alt="Location icon"
          />
        </section>

        <section className={styles.countdown}>
          {countdownItems.map((item, index) => (
            <CountdownItem key={index} value={item.value} label={item.label} />
          ))}
        </section>
        </div>
        <section className={styles.eventsHeader}>
          <h6>EXPERIENCE THE</h6>
          <h1>FUTURE</h1>
        </section>

        <section className={styles.events_list_box}>
          
        </section>
      </main>
    </>
  );
};

export default YugaantarFest;

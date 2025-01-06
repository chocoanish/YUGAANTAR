import React from "react";
import styles from "./Events.module.css";
import MovingCarousel from "../../components/MovingCarousel/MovingCarousel";
import Navbar from "../../components/Navbar/Navbar";

export interface Event {
  id: number;
  type: string;
  name: string;
  date: number;
  registered: number;
  imageUrl: string;
}

const Events: React.FC = () => {
  const events: { [key: string]: Event[] } = {
    "08 FEB": [
      {
        id: 1,
        type: "Event Type",
        name: "Event Name",
        date: 8,
        registered: 23,
        imageUrl: "https://placehold.co/600x400",
      },
      {
        id: 2,
        type: "Event Type",
        name: "Event Name",
        date: 8,
        registered: 23,
        imageUrl: "https://placehold.co/600x400",
      },
      {
        id: 3,
        type: "Event Type",
        name: "Event Name",
        date: 8,
        registered: 23,
        imageUrl: "https://placehold.co/600x400",
      },
      {
        id: 4,
        type: "Event Type",
        name: "Event Name",
        date: 8,
        registered: 23,
        imageUrl: "https://placehold.co/600x400",
      },
      {
        id: 5,
        type: "Event Type",
        name: "Event Name",
        date: 8,
        registered: 23,
        imageUrl: "https://placehold.co/600x400",
      },
      // Add more events here
    ],
    "09 FEB": [
      // Add events for this date
    ],
  };

  return (
    <main className={styles.eventContainer}>
      <Navbar />
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>EVENTS</h1>
          <p className={styles.subtitle}>
            From <span className={styles.subtitleEvents}>coding challenges</span> to <span className={styles.subtitleEvents}>gaming marathons</span>,
            <br />
            there's something for <span className={styles.subtitleHighlight}>everyone!</span>
          </p>
        </header>

        <MovingCarousel direction="left" speed={1} />
        <MovingCarousel direction="right" speed={1.5} />

        <div className={styles.timeline}>
          {Object.entries(events).map(([date, dateEvents]) => (
            <div key={date} className={styles.dateSection}>
              <div className={styles.date}>
                <span className={styles.day}>{date.split(" ")[0]}</span>
                <span className={styles.month}>{date.split(" ")[1]}</span>
              </div>
              <div className={styles.eventsList}>
                <div className={styles.eventsListTitle}></div>
              <div className={styles.eventGrid}>
                {dateEvents.map((event) => (
                  <div key={event.id} className={styles.eventCard}>
                    <div className={styles.eventImage}>
                      <img src={event.imageUrl} alt={event.name} />
                    </div>
                    <div className={styles.eventInfo}>
                      <h3 className={styles.eventType}>{event.type}</h3>
                      <p className={styles.eventName}>{event.name}</p>
                      <p className={styles.eventRegistered}>{event.registered}</p>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Events;

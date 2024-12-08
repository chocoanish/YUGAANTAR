import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import CountdownItem from "../../components/CountDown/CountDown";
import EventInfo from "../../components/EventInfo/EventInfo";
import { useCountdownStore } from "../../store/countDown";
import {
  festTitle,
  primeEvent1,
  primeEvent2,
  primeEvent3,
  Correct,
  Code,
  Networking,
  TechTalks,
  BriefCase,
  Participants,
  Trophy,
  X,
  LinkedIn,
  Instagram,
  Youtube,
  Discord,
  Globe
} from "../../assets/Images";

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

  const eventItems = [
    { value: "Tech Odyssey", imgUrl: primeEvent1 },
    { value: "Gaming Arena", imgUrl: primeEvent2 },
    { value: "Music Revolution", imgUrl: primeEvent3 },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className={styles.background}>
        <img className={styles.blue_gradient} src="./Ellipse.svg" alt="" />
      </div>
      <main className={styles.landingPage}>
        <Navbar />
        <div className={styles.container}>
          <img src={festTitle} className={styles.festName} />
          <h1 className={styles.festTitle}>
            <span>Bangalore's most awaited </span>
            <span className={styles.underlinedText}>Tech Fest</span>
          </h1>
          <p className={styles.festDescription}>
            <span className={styles.highlightedText}>
              Scaler School of Technology's{" "}
            </span>
            premier Technology and Cultural Festival with live events, exciting
            prize pools and networking opportunities with top industry
            professionals.
          </p>
          <div className={styles.actionButtons}>
            <button className={styles.primaryButton}>Book Tickets</button>
            <button className={styles.secondaryButton}>Explore Events</button>
          </div>
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
              <CountdownItem
                key={index}
                value={item.value}
                label={item.label}
              />
            ))}
          </section>
        </div>
        <section className={styles.eventsHeader}>
          <h6>EXPERIENCE THE</h6>
          <h1>FUTURE</h1>
        </section>

        <section className={styles.events_display}>
          <div className={styles.events_list_box}>
            {eventItems.map((item, index) => (
              <div key={index} className={styles.primeEvents}>
                <img src={item.imgUrl} />
                <span>{item.value}</span>
              </div>
            ))}
          </div>

          <div className={styles.event_category_buttons}>
            <div
              className={styles.moving_background}
              style={{ transform: `translateX(${activeIndex * 107.5}%)` }}
            ></div>
            <button onClick={() => handleButtonClick(0)}>Tech Events</button>
            <button onClick={() => handleButtonClick(1)}>
              Cultural Events
            </button>
            <button onClick={() => handleButtonClick(2)}>Post Shows</button>
          </div>

          <div className={styles.eventCards}>
            <div className={styles.endCards}>
              <div></div>
              <div></div>
            </div>
            <div className={styles.middleCards}>
              <div></div>
              <div></div>
            </div>
            <div className={styles.frontCards}>
              <div></div>
            </div>
          </div>
        </section>

        <section className={styles.whyToJoinUs}>
          <div>
            <h1>Why to Join us?</h1>
            <span>
              We have a fantastic lineup of speakers and sessions for you to
              learn and enhance your skills.
            </span>
            <div className={styles.whyCards}>
              <div>
                <img src={TechTalks} alt="Tech Talks" />
                <h2>Tech Talks</h2>
                <span>
                  Several speakers are coming together to talk about their
                  experiences in the industry. We will also have a few lightning
                  talks with our members.
                </span>
              </div>
              <div>
                <img src={Correct} alt="Correct" />
                <h2>Top Industry Professionals</h2>
                <span>
                  Experts from the industry will be on hand to answer your
                  questions and give you advice on how to get int the industry.
                </span>
              </div>
              <div>
                <img src={Networking} alt="Networking" />
                <h2>Networking</h2>
                <span>
                  You will have the opportunity to network with other students
                  and professionals in the industry. Meet and connect with your
                  peers as well as industry professionals who can help you get
                  your foot in the door.
                </span>
              </div>
              <div>
                <img src={Code} alt="Code" />
                <h2>Hackathons and Competitions</h2>
                <span>
                  We will be hosting a series of hackathons and competitive
                  programming competitions with exciting rewards and cash
                  prizes. Our members will also give a few lightning talks.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.festiveHighlights}>
          <h1>Festive Highlights</h1>
          <div>
            <div>
              <img src={Participants} alt="Participants" />
              <span>1000+</span>
              <p>Participants</p>
            </div>
            <div>
              <img src={Trophy} alt="Trophy" />
              <span>20+</span>
              <p>Events</p>
            </div>
            <div>
              <img src={BriefCase} alt="BriefCase" />
              <span>3+</span>
              <p>Days of Fun</p>
            </div>
          </div>
        </section>

        <footer>
          <div>
            <div className={styles.footerTitle}>Connect with us</div>
            <div className={styles.socialIcons}>
              <img src={X} alt="X" />
              <img src={LinkedIn} alt="LinkedIn" />
              <img src={Instagram} alt="Instagram" />
              <img src={Youtube} alt="Youtube" />
              <img src={Discord} alt="Discord" />
              <img src={Globe} alt="Globe" />
            </div>
            <div className={styles.copyright}>© 2024 Yugantar Fest. All rights reserved.</div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default YugaantarFest;

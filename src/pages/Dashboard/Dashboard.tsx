import styles from './Dashboard.module.css';
import { Settings, LogOut, Edit, Calendar, Clock, User } from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';

interface Profile {
  name: string;
  email: string;
  phone: string;
  college: string;
  progress: number;
  progressTotal: number;
  progressLabel: string;
}

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  status: 'Confirmed' | 'Waitlisted';
}

interface Transaction {
  id: string;
  event: string;
  amount: number;
  date: string;
  status: 'Pending' | 'Successful';
}

interface Announcement {
  title: string;
  subtitle?: string;
  datetime?: string;
  color: 'pink' | 'blue' | 'green';
}

const Dashboard = () => {
  const profile: Profile = {
    name: "John Paul",
    email: "jaunpaul21@gmail.com",
    phone: "+91-9876546783",
    college: "International Institute of Information Technology, Bangalore",
    progress: 3,
    progressTotal: 5,
    progressLabel: "Event Registration"
  };

  const events: Event[] = [
    {
      id: "1",
      title: "Tech Innovation Hackathon",
      date: "15 Jan 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Scaler School of Technology, Main Campus",
      status: "Confirmed"
    },
    {
      id: "2",
      title: "Entrepreneurship Workshop",
      date: "16 Jan 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Scaler School of Technology, Innovation Lab",
      status: "Waitlisted"
    }
  ];

  const transactions: Transaction[] = [
    {
      id: "TTCN102200800594",
      event: "Tech Innovation Hackathon",
      amount: 250,
      date: "09th Jan 2024",
      status: "Successful"
    },
    {
      id: "-",
      event: "Entrepreneurship Workshop",
      amount: 250,
      date: "-",
      status: "Pending"
    }
  ];

  const announcements: Announcement[] = [
    {
      title: "Concert Night!",
      datetime: "18 Jan 2024 | 6:00 PM - 10:00 PM",
      color: "pink"
    },
    {
      title: "New Badge!",
      subtitle: "Participant Badge Earned!",
      color: "blue"
    },
    {
      title: "Merchandise Discount!",
      subtitle: "30% OFF on new merch!",
      color: "green"
    }
  ];

  return (
    <div className={styles.container}>
      <Navbar/>

      <main className={styles.main}>
        <h1 className={styles.welcome}>Welcome John!</h1>
        <p className={styles.subtitle}>Let's make Yugantar 2024 unforgettable!</p>

        <div className={styles.grid}>
          <aside className={styles.sidebar}>
            <nav className={styles.sideNav}>
              <a href="#profile" className={styles.active}>
                <User className={styles.icon} /> Profile
              </a>
              <a href="#registered">
                <Calendar className={styles.icon} /> Registered
              </a>
              <a href="#transaction">
                <Clock className={styles.icon} /> Transaction
              </a>
              <a href="#announcements">Announcements</a>
              <a href="#settings">
                <Settings className={styles.icon} /> Settings
              </a>
              <a href="#logout">
                <LogOut className={styles.icon} /> LogOut
              </a>
            </nav>
          </aside>

          <section className={styles.content}>
            <div className={styles.card}>
              <div className={styles.profile}>
                <div className={styles.avatar}></div>
                <div className={styles.profileInfo}>
                  <div className={styles.profileHeader}>
                    <div>
                      <h3>{profile.name}</h3>
                      <span className={styles.badge}>Participant</span>
                      <span className={styles.points}>P</span>
                    </div>
                    <button className={styles.editButton}>
                      <Edit size={16} /> Edit
                    </button>
                  </div>
                  <p>Email: {profile.email}</p>
                  <p>Phone: {profile.phone}</p>
                  <p>College: {profile.college}</p>
                  <div className={styles.progressContainer}>
                    <div className={styles.progressBar} 
                         style={{width: `${(profile.progress/profile.progressTotal) * 100}%`}}>
                    </div>
                    <span>{profile.progress}/{profile.progressTotal} {profile.progressLabel}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <h2>Registered Events</h2>
              <div className={styles.events}>
                {events.map(event => (
                  <div key={event.id} className={styles.event}>
                    <div className={styles.qrCode}></div>
                    <div className={styles.eventInfo}>
                      <h3>{event.title}</h3>
                      <p>{event.date} | {event.time}</p>
                      <p>{event.location}</p>
                      <span className={`${styles.status} ${styles[event.status.toLowerCase()]}`}>
                        {event.status}
                      </span>
                      <button className={styles.detailsButton}>Details</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.card}>
              <h2>Transactions</h2>
              <div className={styles.tableWrapper}>
                <table className={styles.transactionTable}>
                  <thead>
                    <tr>
                      <th>Transaction ID</th>
                      <th>Event</th>
                      <th>Amount</th>
                      <th>Date of Payment</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map(transaction => (
                      <tr key={transaction.id}>
                        <td>{transaction.id}</td>
                        <td>{transaction.event}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.date}</td>
                        <td>
                          <span className={`${styles.status} ${styles[transaction.status.toLowerCase()]}`}>
                            {transaction.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className={styles.card}>
              <h2>Announcements</h2>
              <div className={styles.announcements}>
                {announcements.map((announcement, index) => (
                  <div 
                    key={index} 
                    className={`${styles.announcement} ${styles[announcement.color]}`}
                  >
                    <h3>{announcement.title}</h3>
                    {announcement.datetime && <p>{announcement.datetime}</p>}
                    {announcement.subtitle && <p>{announcement.subtitle}</p>}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
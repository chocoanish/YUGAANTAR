import styles from  './Dashboard.module.css'
import Navbar from "../../components/Navbar/Navbar"

const Dashboard = () => {
  return (
    <main className={styles.container}>
        <Navbar/>
        <div className={styles.subContainer}>
            <div className={styles.welcomeText}>
            <h1>Welcome John!</h1>
            <p>Let's make Yugantar 2024 unforgettable!</p>
            </div>
        </div>
        <div className={styles.sidebar}>
            
        </div>
    </main>
  )
}

export default Dashboard
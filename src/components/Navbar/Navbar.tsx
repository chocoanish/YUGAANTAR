import React from 'react'
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
    const navItems = ['Events', 'Timeline', 'Merch', 'Contact Us'];
    return(
        <header className={styles.header}>
        <img loading="lazy" src="./YugaantarLogo.svg" alt="Yugaantar Fest Logo" className={styles.logo} />
        <nav className={styles.nav}>
          {navItems.map((item, index) => (
            <a key={index} href={`${item.toLowerCase().replace(' ', '-')}`} className={styles.navLink}>
              {item}
            </a>
          ))}
        </nav>
      </header>
    )
}
export default Navbar
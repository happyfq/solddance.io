import Link from 'next/link';
import styles from '../styles/Nav.module.css';
import React, { useState } from 'react';
import WalletButton from '../components/solana/WalletButton';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navbar_container}>
        <Link href="/" className={styles.navbar_home}>
          SOLDANCE
        </Link>
        <div
          className={`${styles.navbar_toggle} ${isMenuOpen ? styles.open : ''}`}
          onClick={toggleMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>

        <ul
          className={`${styles.navbar_menu} ${isMenuOpen ? styles.active : ''}`}
        >
          <li className={styles.navbar_lin}>
            <Link href="/story" className={styles.navbar_name}>
              Story
            </Link>
          </li>
          <li className={styles.navbar_lin}>
            <Link href="/nfts" className={styles.navbar_name}>
              NFTs
            </Link>
          </li>
          <li className={styles.navbar_lin}>
            <Link href="/play" className={styles.navbar_name}>
              Play
            </Link>
          </li>
          <li className={styles.navbar_lin}>
            <Link href="/wiki" className={styles.navbar_name}>
              Wiki
            </Link>
          </li>
        </ul>
        <div
          className={`${styles.toprighter} ${isMenuOpen ? styles.active : ''}`}
        >
          <WalletButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

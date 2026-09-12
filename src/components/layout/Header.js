"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <img 
            src="https://profitleaksolutions.com/wp-content/uploads/2026/04/cropped-Website-Header-Logo-Rendered-768x353.png" 
            alt="Profit Leak Solutions" 
            className={styles.logoImage}
          />
        </Link>
        
        <nav className={`${styles.desktopNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}>
          <Link href="#services" className={styles.navLink} onClick={closeMenu}>Services</Link>
          <Link href="#partnership" className={styles.navLink} onClick={closeMenu}>Partnership</Link>
          <Link href="#contact" className={styles.navLink} onClick={closeMenu}>Contact Us</Link>
          <Link href="#contact" className="btn btn-primary" onClick={closeMenu}>Request a Diagnostic</Link>
        </nav>

        <button className={styles.mobileMenuBtn} aria-label="Toggle menu" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

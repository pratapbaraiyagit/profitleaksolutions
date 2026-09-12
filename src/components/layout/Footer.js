import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="https://profitleaksolutions.com/wp-content/uploads/2026/04/cropped-Website-Header-Logo-Rendered-768x353.png" 
              alt="Profit Leak Solutions" 
              width={104}
              height={48}
              className={styles.logoImage}
            />
          </Link>
          <p className={styles.tagline}>
            Business Profit Optimization & Operational Analysis
          </p>
        </div>
        
        <div className={styles.footerLinks}>
          <h4 className={styles.footerHeading}>Quick Links</h4>
          <nav className={styles.navCol}>
            <Link href="#services">Services</Link>
            <Link href="#partnership">Partnership</Link>
            <Link href="#contact">Contact Us</Link>
          </nav>
        </div>

        <div className={styles.footerContact}>
          <h4 className={styles.footerHeading}>Contact</h4>
          <p>info@profitleaksolutions.com</p>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className={`container ${styles.bottomContainer}`}>
          <p>&copy; {currentYear} Profit Leak Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

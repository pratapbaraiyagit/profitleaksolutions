import Link from 'next/link';
import styles from './Hero.module.css';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={`${styles.heroContent} fade-in delay-100`}>
          <h1 className={styles.title}>
            Take Control and Stop Losing Money You Already Earned.
          </h1>
          <p className={styles.subtitle}>
            We help businesses identify profit leaks, overhaul operational inefficiencies, and deliver exceptional customer experiences that retain revenue.
          </p>
          <div className={styles.actions}>
            <Link href="#contact" className="btn btn-primary">
              Request a Diagnostic
              <ArrowRight className={styles.icon} size={20} />
            </Link>
            <Link href="#services" className={styles.secondaryLink}>
              Explore Our Approach
            </Link>
          </div>
        </div>
        
        <div className={`${styles.heroImageWrapper} fade-in delay-200`}>
          <img 
            src="https://profitleaksolutions.com/wp-content/uploads/2026/01/Website-Hero-Image-3.png"
            alt="Business Professional"
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
}

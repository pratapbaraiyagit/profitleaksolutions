import styles from './WhyUs.module.css';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const reasons = [
  "Stop guessing and start working with clear, factual data.",
  "No theoretical jargon, just practical guidance.",
  "Tailored execution strategy unique to your exact operations and team.",
  "Maximization of your resources to prevent future leaks."
];

export default function WhyUs() {
  return (
    <section className={`section ${styles.whyUsSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.imageCol}>
          <Image
            src="https://profitleaksolutions.com/wp-content/uploads/2026/01/Messy-Desk-1024x683.png"
            alt="Why Profit Leak Solutions"
            width={1024}
            height={683}
            className={styles.whyUsImage}
            sizes="(max-width: 992px) 100vw, 50vw"
          />
        </div>
        
        <div className={styles.contentCol}>
          <h2 className={styles.title}>Why Profit Leak Solutions?</h2>
          <p className={styles.description}>
            When you partner with us, you get direct access to executive-level strategic thinking paired with hands-on operational execution. We don&apos;t guess; we diagnose, identify, and improve.
          </p>
          
          <ul className={styles.list}>
            {reasons.map((reason, index) => (
              <li key={index} className={styles.listItem}>
                <CheckCircle2 className={styles.checkIcon} size={24} />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

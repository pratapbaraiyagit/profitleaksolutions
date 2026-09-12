import Link from 'next/link';
import styles from './ConversionCTA.module.css';

export default function ConversionCTA() {
  return (
    <section className={`section ${styles.ctaSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Find Where Your Business Is Losing Profit.</h2>
          <p className={styles.description}>
            Don&apos;t let operational friction erode your margins. Start with a comprehensive operational diagnostic to uncover hidden leaks and unlock your full revenue potential.
          </p>
          <Link href="#contact" className="btn btn-primary">
            Request a Diagnostic
          </Link>
        </div>
      </div>
    </section>
  );
}

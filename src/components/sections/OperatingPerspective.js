import styles from './OperatingPerspective.module.css';

export default function OperatingPerspective() {
  return (
    <section className={`section ${styles.perspectiveSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Our Operating Perspective</h2>
          <div className={styles.divider}></div>
          <p className={styles.leadText}>
            We believe that theory only goes so far. Real business growth requires practical, battle-tested operational experience.
          </p>
          <div className={styles.textGrid}>
            <p>
              Many consultants offer generic advice without understanding the daily realities of running a business. Our perspective is built from the ground up—forged in high-pressure, competitive environments where execution is everything.
            </p>
            <p>
              We don&apos;t just hand you a report and walk away. We diagnose the friction points in your processes, identify the areas where revenue is leaking, and implement the necessary changes to drive sustainable profitability and customer retention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

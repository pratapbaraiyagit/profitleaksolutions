import styles from './Process.module.css';

const steps = [
  {
    num: "01",
    title: "Diagnose",
    desc: "We dive deep into your current operations to uncover hidden friction points."
  },
  {
    num: "02",
    title: "Identify",
    desc: "We pinpoint the exact areas where profit is leaking and margins are eroding."
  },
  {
    num: "03",
    title: "Improve",
    desc: "We implement practical changes to seal the leaks and build sustainable systems."
  }
];

export default function Process() {
  return (
    <section className={`section ${styles.processSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>How We Work</h2>
        </div>
        
        <div className={styles.stepsWrapper}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepItem}>
              <div className={styles.stepNumber}>{step.num}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
              
              {index < steps.length - 1 && (
                <div className={styles.connector}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

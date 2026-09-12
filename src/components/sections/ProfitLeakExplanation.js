import styles from './ProfitLeakExplanation.module.css';
import { AlertCircle, Clock, Users, ShieldAlert, TrendingDown, PhoneOff, Settings } from 'lucide-react';

const leakCauses = [
  { icon: PhoneOff, text: "Poor lead follow-up" },
  { icon: Clock, text: "Slow or inefficient processes" },
  { icon: Users, text: "Subpar customer experience" },
  { icon: ShieldAlert, text: "Reputation issues" },
  { icon: Users, text: "High staff turnover" },
  { icon: TrendingDown, text: "Missing retention systems" },
  { icon: Settings, text: "Operational bottlenecks" },
];

export default function ProfitLeakExplanation() {
  return (
    <section className={`section ${styles.explanationSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>What is a Profit Leak?</h2>
          <p className={styles.description}>
            A profit leak is any area where your business loses money unnecessarily. While most leaders focus on top-line revenue, true growth is sabotaged by overlooked inefficiencies and operational friction.
          </p>
          <p className={styles.description}>
            When left unaddressed, these leaks silently drain resources, frustrate customers, and erode your hard-earned margins.
          </p>
        </div>

        <div className={styles.visualGrid}>
          {leakCauses.map((cause, index) => {
            const Icon = cause.icon;
            return (
              <div key={index} className={`${styles.leakItem} slide-up`} style={{ animationDelay: `${index * 100}ms` }}>
                <div className={styles.iconWrapper}>
                  <Icon size={24} />
                </div>
                <span className={styles.leakText}>{cause.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

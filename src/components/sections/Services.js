import Link from 'next/link';
import styles from './Services.module.css';
import { Activity, BarChart, Users } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "Business Health Diagnostics",
    description: "A comprehensive audit of your operations to identify friction points, process bottlenecks, and areas of profit leakage.",
    icon: Activity
  },
  {
    id: "02",
    title: "Operational & Customer Experience Overhaul",
    description: "Redesigning workflows and touchpoints to ensure smooth execution, reducing staff turnover, and maximizing customer satisfaction.",
    icon: Users
  },
  {
    id: "03",
    title: "Performance Partnership",
    description: "Ongoing strategic guidance and hands-on execution to maintain operational excellence and sustained profitability.",
    icon: BarChart
  }
];

export default function Services() {
  return (
    <section id="services" className={`section ${styles.servicesSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>A Complete & Full Cycle Business Analysis</h2>
          <p className={styles.subtitle}>
            Our methodology is designed as a cohesive ecosystem, addressing the core pillars of business operations.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.cardNumber}>{service.id}</div>
                <div className={styles.iconWrapper}>
                  <Icon size={32} />
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className={styles.footer}>
          <Link href="#contact" className="btn btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

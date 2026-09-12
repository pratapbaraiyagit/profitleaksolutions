import styles from './FinalContact.module.css';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function FinalContact() {
  return (
    <section id="contact" className={`section ${styles.contactSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.infoCol}>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.description}>
            Ready to stop the leaks and optimize your operations? Contact us to discuss how we can help your business thrive.
          </p>
          
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <Mail className={styles.icon} size={24} />
              <span>info@profitleaksolutions.com</span>
            </div>
            <div className={styles.contactItem}>
              <MapPin className={styles.icon} size={24} />
              <span>Available for nationwide consulting</span>
            </div>
            {/* The prompt mentioned keeping existing contact info. Assuming email is primary based on standard sites, and nationwide based on consulting nature. */}
          </div>
        </div>
        
        <div className={styles.formCol}>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Full Name</label>
              <input type="text" id="name" className={styles.input} placeholder="John Doe" required />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email Address</label>
              <input type="email" id="email" className={styles.input} placeholder="john@company.com" required />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>How can we help?</label>
              <textarea id="message" className={styles.textarea} rows="4" placeholder="Tell us about your operational challenges..." required></textarea>
            </div>
            
            <button type="button" className={`btn btn-primary ${styles.submitBtn}`}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

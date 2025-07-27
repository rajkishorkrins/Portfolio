import React from 'react';
import styles from '../Contact/ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <p className={styles.description}>
        Let's connect! Feel free to reach out if you have any questions, collaborations, or opportunities.
      </p>
      
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <input type="text" placeholder="Your Name" required />
        </div>
        <div className={styles.formGroup}>
          <input type="email" placeholder="Your Email" required />
        </div>
        <div className={styles.formGroup}>
          <textarea placeholder="Your Message" rows="5" required></textarea>
        </div>
        <button type="submit" className="hover">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;

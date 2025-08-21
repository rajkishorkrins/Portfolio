import React from 'react';
import styles from '../Footer/FooterStyles.module.css';


import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import { useTheme } from '../../Common/ThemeContext';

function Footer() {
  const { theme } = useTheme();

  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>© {new Date().getFullYear()} Rajkishor Krins | All Rights Reserved</p>
      <div className={styles.socials}>
        <a
          href="https://www.linkedin.com/in/raj-kishor-9131081a1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/rajkishorkrins"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

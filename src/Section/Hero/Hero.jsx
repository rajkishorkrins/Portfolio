import React from 'react';   
import heroimg from '../../assets/hero2.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinlight from '../../assets/linkedin-light.svg';
import linkedindark from '../../assets/linkedin-dark.svg';
import githublight from '../../assets/github-light.svg';
import githubdark from '../../assets/github-dark.svg';
import styles from './Herostyles.module.css';
import CV from '../../assets/Resume2 - Frontend Developer.pdf';
import { useTheme } from '../../Common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const linkedinIcon = theme === 'light' ? linkedinlight : linkedindark;
  const githubIcon = theme === 'light' ? githublight : githubdark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroimg}
          alt="Profile pic of Rajkishor"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Toggle theme"
          onClick={toggleTheme}
          style={{ cursor: "pointer" }}
        />
      </div>

      <div className={styles.info}>
        <h1 className={styles.name}>RAJKISHOR KRINS</h1>
        <h2 className={styles.role}>Frontend Developer</h2>

        <div className={styles.socialIcons}>
          <a href="https://www.linkedin.com/in/raj-kishor-9131081a1/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://github.com/rajkishorkrins" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>

        <p className={styles.description}>
          With a passion for developing modern React web Apps for commercial businesses
        </p>

        <a href={CV} download>
          <button className={styles.resumeBtn}>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;

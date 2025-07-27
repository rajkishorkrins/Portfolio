import React from 'react';
import styles from './SkillStyles.module.css';

// Import skill logos
import htmlLogo from '../../assets/html-5.png';
import cssLogo from '../../assets/css3.png';
import jsLogo from '../../assets/javascript.png';
import reactLogo from '../../assets/react-native.png'
import jqueryLogo from '../../assets/jquery.png';
import bootstrapLogo from '../../assets/bootstrap.png';
import mysqlLogo from '../../assets/mysql-logo.png';
import javaLogo from '../../assets/java-coffee-cup-logo.png'
import awsLogo from '../../assets/amazon-web-services.png';
import dsaLogo from '../../assets/external-algorithm-machine-learning-flat-flat-juicy-fish.png';


function Skills() {
  const skills = [
    { name: "HTML", img: htmlLogo },
    { name: "CSS", img: cssLogo },
    { name: "JavaScript", img: jsLogo },
    { name: "React.js", img: reactLogo },
    { name: "jQuery", img: jqueryLogo },
    { name: "Bootstrap", img: bootstrapLogo },
    { name: "MySQL", img: mysqlLogo },
    { name: "Java", img: javaLogo },
    { name: "AWS", img: awsLogo },
    { name: "DSA", img: dsaLogo },
    
  ];

  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <img src={skill.img} alt={skill.name} className={styles.skillImage} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

import styles from './ProjectsStyles.module.css';
import cafe from '../../assets/cafeLogo.avif';
import villa from '../../assets/villa.avif';
import Ios from '../../assets/the-ios-center.avif';
import calcultor from '../../assets/calculator.avif';
import Todo from '../../assets/to-do-lsit.avif';
import Weather from '../../assets/weather.avif';
import Academia from '../../assets/academia.jpg';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>

        <a href="https://cafe-website0.netlify.app/" target='_blank' className={styles.card}>
          <img className="hover" src={cafe} alt="Cafe Project" />
          <h3>Cafe</h3>
          <p>A modern cafe website showcasing menu, services, and booking features.</p>
        </a>

        <a href="https://willowy-otter-4e2401.netlify.app/" target='_blank' className={styles.card}>
          <img className="hover" src={Academia} alt="Cafe Project" />
          <h3>Academia</h3>
          <p>Online learning Website</p>
        </a>

        <a href="https://github.com/rajkishorkrins/villa-website" target='_blank' className={styles.card}>
          <img className="hover" src={villa} alt="Villa Project" />
          <h3>Villa</h3>
          <p>A real estate villa website highlighting property details and booking.</p>
        </a>

        <a href="https://github.com/rajkishorkrins/The-Ios-center" target='_blank' className={styles.card}>
          <img className="hover" src={Ios} alt="iOS Center Project" />
          <h3>iOS Center</h3>
          <p>A professional website for iOS device repair and services.</p>
        </a>

        <a href="https://github.com/rajkishorkrins/calculator-App" target='_blank' className={styles.card}>
          <img className="hover" src={calcultor} alt="Calculator Project" />
          <h3>Calculator</h3>
          <p>A simple, responsive calculator web app built with JavaScript.</p>
        </a>

        <a href="https://github.com/rajkishorkrins/Weather-App" target='_blank' className={styles.card}>
          <img className="hover" src={Todo} alt="To-Do Project" />
          <h3>To-Do App</h3>
          <p>A task management app for creating and tracking daily tasks.</p>
        </a>

        <a href="https://github.com/rajkishorkrins/Weather-App" target='_blank' className={styles.card}>
          <img className="hover" src={Weather} alt="Weather App" />
          <h3>Weather App</h3>
          <p>A weather forecast web app with real-time API integration.</p>
        </a>

        

      </div>
    </section>
  )
}

export default Projects;

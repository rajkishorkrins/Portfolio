import React from 'react';
import Navigation from './Navigation'; // Import the navigation component
import Hero from './Section/Hero/Hero';
import Projects from './Section/Projects/Projects';
import Skills from './Section/Skills/Skills';
import Contact from './Section/Contact/Contact';
import Footer from './Section/Footer/Footer';
import './App.css'

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
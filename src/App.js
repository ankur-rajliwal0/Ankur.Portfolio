import './App.css';
import NavBar from './Componets/NavBar';
import Hero from './Componets/Hero';
import Services from './Componets/Services';
import AboutMe from './Componets/AboutMe';
import Contact from './Componets/Contact';
import Subscribe from './Componets/Subscribe';
import LetsTalk from './Componets/LetsTalk';
import Footer from './Componets/Footer';
import BackToTopButton from './Componets/BackToTopButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import MySkills from './Componets/MySkills';
import Projects from './Componets/Projects';
import FigmaDesign from './Componets/FigmaDesign';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // animation duration in ms
      once: true,      // only animate once
    });
  }, []);

  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Services/>
      <AboutMe/>
      {/* <Projects/> */}
      <FigmaDesign/>
      <MySkills/>
      <Contact/>
      <Subscribe/>
      <LetsTalk/>
      <Footer/>
      <BackToTopButton/>
    </div>
  );
}

export default App;

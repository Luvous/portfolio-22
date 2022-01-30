import './App.css';
import SunVideo from './components/SunVideo';
import Astronaut from './components/Astronaut';
import IntroContent from './components/IntroContent';
import AboutSection from './components/sections/AboutSection';
import PlanetWithMoon from './components/PlanetWithMoon';
import ProjectsSection from './components/sections/ProjectsSection';
import Planet from './components/Planet';
import SkillsSection from './components/sections/SkillsSection';
import ContactSection from './components/sections/ContactSection';
import AboutText from './components/AboutText';
import Cards from './components/Cards';
import Skills from './components/Skills';
import ContactOptions from './components/ContactOptions';
import ContactPlanet from './components/ContactPlanet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <div className='webapp'>
      <ToastContainer
        position="bottom-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <section id='home'>
        <SunVideo />
        <IntroContent />
        <Planet />
      </section>
      <section id='about'>
        <AboutSection />
        <PlanetWithMoon />
        <AboutText />
      </section>
      <section id='projects'>
        <ProjectsSection />
        <Astronaut />
        <Cards />
      </section>
      <section id='skills'>
        <SkillsSection />
        <Skills />
      </section>
      <section id='contact'>
        <ContactSection />
        <ContactOptions />
        <ContactPlanet />
      </section>
    </div>
  );
}

export default App;

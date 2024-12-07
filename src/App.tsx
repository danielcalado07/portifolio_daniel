import NavBar from './components/navBar';
import About from './pages/about';
import TechnicalSkills from './pages/technicalSkills';
import ProfessionalExperiences from './pages/professionalExperiences';
import ControlledCarousel from './pages/certificates';
import { useRef } from 'react';
import Contacts from './pages/Contacts';

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  const handleScrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToProjects = () => {
    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContacts = () => {
    contactsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
        <NavBar
        onScrollToAbout={handleScrollToAbout}
        onScrollToProjects={handleScrollToProjects}
        onScrollToContacts={handleScrollToContacts}
      />
        <About ref = {aboutRef}/>
        <TechnicalSkills/>
        <ProfessionalExperiences ref = {skillsRef}/>
        <ControlledCarousel />
        <Contacts ref = {contactsRef}/>
    </div>
  );
}

export default App;
import NavBar from './components/navBar';
import About from './pages/about';
import TechnicalSkills from './pages/technicalSkills';
import ProfessionalExperiences from './pages/professionalExperiences';
import ControlledCarousel from './pages/certificates';
import { useRef, useEffect } from 'react';
import axios from 'axios';
import Contacts from './pages/Contacts';

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const sendEmail = async () => {
      const conteudoEmail = "Portifólio acessado as " + new Date().toLocaleString();
      await axios.post(`https://backend-leiloame.vercel.app/email`, {
        email: 'danielcalado159@gmail.com',
        subject: 'Portifólio acessado',
        html: conteudoEmail,
        text: "Portifólio acessado"
      });
    };
    sendEmail();
  }, []);

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
      <About ref={aboutRef} />
      <TechnicalSkills />
      <ProfessionalExperiences ref={skillsRef} />
      <ControlledCarousel />
      <Contacts ref={contactsRef} />
    </div>
  );
}

export default App;
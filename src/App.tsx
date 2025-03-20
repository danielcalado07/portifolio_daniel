import NavBar from './components/navBar';
import About from './pages/about';
import TechnicalSkills from './pages/technicalSkills';
import ProfessionalExperiences from './pages/professionalExperiences';
import ControlledCarousel from './pages/certificates';
import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import Contacts from './pages/Contacts';

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);
  const [location, setLocation] = useState('');
  const [cont, setCont] = useState(0);

  async function getLocation() {
    try {
      const response = await fetch('https://ip-api.com/json');

      if (!response.ok) {
        throw new Error('Erro ao buscar localização');
      }
      const data = await response.json();
      setLocation(data.city + ', ' + data.regionName);
      setCont(cont + 1);
    } catch (error) {
      console.error('Erro ao obter localização:', error);
    }
  }

  getLocation();

  useEffect(() => {
    if(cont === 1) {
    const sendEmail = async () => {
      const conteudoEmail = "Portifólio acessado as " + new Date().toLocaleString() + " de " + location;
      await axios.post(`https://backend-leiloame.vercel.app/email`, {
        email: 'danielcalado159@gmail.com',
        subject: 'Portifólio acessado',
        html: conteudoEmail,
        text: "Portifólio acessado"
      });
    };
    sendEmail();
  }
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
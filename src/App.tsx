import NavBar from './components/navBar';
import About from './pages/about';
import TechnicalSkills from './pages/technicalSkills';
import ProfessionalExperiences from './pages/professionalExperiences';
import ControlledCarousel from './pages/certificates';

function App() {
  return (
    <div className="App">
        <NavBar />
        <About />
        <TechnicalSkills />
        <ProfessionalExperiences />
        <ControlledCarousel/>
    </div>
  );
}

export default App;
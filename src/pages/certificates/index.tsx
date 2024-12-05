import { Carousel } from 'primereact/carousel';
import { Container, H1About } from './styles';
import { CertifCompass, CertifNest, CertifSauter, CertifTestes } from '../../assets/images';

const MeuCarrossel = () => {
  const items = [
    { name: 'Sauter University', image: CertifSauter },
    { name: 'ScholarShip Program', image: CertifCompass },
    { name: 'Cypress - Básico', image: CertifTestes },
    { name: 'NestJs do Zero', image: CertifNest },
  ];

  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const itemTemplate = (item: { name: string; image: string }) => {
    return (
      <div
        className="carousel-item"
        style={{
          margin: '10px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          backgroundColor: '#fff',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        }}
      >
        <img src={item.image} alt={item.name} style={{ width: '100%', borderRadius: '8px' }} />
        <h3 style={{ textAlign: 'center', marginTop: '10px' }}>{item.name}</h3>
      </div>
    );
  };

  return (
    <Container>
      <H1About>Certificados</H1About>
      <Carousel
        value={items}
        numVisible={2}
        numScroll={2}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        autoplayInterval={3000}
        itemTemplate={itemTemplate}
      />
    </Container>
  );
};

export default MeuCarrossel;

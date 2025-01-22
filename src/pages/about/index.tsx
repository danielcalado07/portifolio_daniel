import { HeaderImage, PerfilUser } from "../../assets/images";
import {
    Buttons,
    Container,
    ContainerAbout,
    Description,
    DescriptionAbout,
    H1About,
    H1Title,
    Image,
    ImagePerfil,
    Presentation,
    Span,
    Subtitle
} from "./styles";
import ButtonLeaked from "../../components/Button/ButtonLeaked";
import ButtonSolid from "../../components/Button/ButtonSolid";
import { forwardRef } from "react";



const about = forwardRef<HTMLDivElement>((_, refAbout) => {

        const handleDownload = () => {
          const fileUrl = '/danielcalado.pdf';
          const link = document.createElement('a');
          link.href = fileUrl;
          link.download = 'Daniel Calado CV.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };

    return (
        <Container ref = {refAbout}>
            <Image src={HeaderImage} alt="about" />
            <Presentation>
                <Description>
                    <H1Title>
                        Oi, eu sou<br />Daniel Calado.
                    </H1Title>
                    <Subtitle>
                        Front-end | QA
                    </Subtitle>
                    <Buttons>
                        <ButtonSolid variant="success" onClick={handleDownload}>Currículo</ButtonSolid>
                        <ButtonLeaked variant="success" onClick={() => window.open('https://www.linkedin.com/in/daniel-calado-a1950a159/')}>Linkedin</ButtonLeaked>
                    </Buttons>
                </Description>
                <ImagePerfil src={PerfilUser} alt="Perfil" />
            </Presentation>
            <ContainerAbout>
                <H1About>
                    Sobre mim
                </H1About>
                <DescriptionAbout>
                    Sou programador Front-End com experiência em diversas tecnologias e metodologias de
                    desenvolvimento. Tenho habilidades em <Span>JavaScript</Span>, <Span>Node.js</Span>, <Span>React</Span>,
                    <Span>HTML</Span> e <Span>MongoDB</Span>, o que me permite atuar
                    tanto no desenvolvimento de <Span>front-end</Span> quanto no <Span>back-end</Span>. Além disso, já atuei
                    como QA, utilizando
                    ferramentas como <Span>Cypress</Span> e <Span>Postman</Span> para garantir a qualidade do software por meio
                    de testes automatizados e
                    manuais. Minha experiência me permite entregar soluções completas e eficientes, sempre focando na qualidade
                    e na funcionalidade.
                </DescriptionAbout>
            </ContainerAbout>
        </Container>
    );
});
export default about;
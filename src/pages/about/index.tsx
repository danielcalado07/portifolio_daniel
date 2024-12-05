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

const about = () => {
    return (
        <Container>
            <Image src={HeaderImage} alt="about" />
            <Presentation>
                <Description>
                    <H1Title>
                        Oi, eu sou<br />Daniel Calado.
                    </H1Title>
                    <Subtitle>
                        Programador Full-Stack & Analista de Qualidade (QA)
                    </Subtitle>
                    <Buttons>
                        <ButtonSolid variant="success">Currículo</ButtonSolid>
                        <ButtonLeaked variant="success">Linkedin</ButtonLeaked>
                    </Buttons>
                </Description>
                <ImagePerfil src={PerfilUser} alt="Perfil" />
            </Presentation>
            <ContainerAbout>
                <H1About>
                    Sobre mim
                </H1About>
                <DescriptionAbout>
                    Sou programador full stack com experiência em diversas tecnologias e metodologias de
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
}
export default about;
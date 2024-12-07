import { forwardRef } from "react";
import { IconCss, IconCypress, IconHtml, IconJava, IconNode, IconPostman, IconReact, IconSelenium, IconSwagger, IconTs } from "../../assets/images";
import { Container, ContainerSkills, DescriptionSkills, H1About, Image, Skills } from "./styles";

const technicalSkills = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <Container ref = {ref}>
            <H1About>
                Habilidades Técnicas
            </H1About>
            <ContainerSkills>
            <Skills>
                <Image src={IconReact} alt="React JS" />
                <DescriptionSkills>React JS</DescriptionSkills>
            </Skills>
            <Skills>
                <Image src={IconHtml} alt="HTML" />
                <DescriptionSkills>HTML</DescriptionSkills>
            </Skills>
            <Skills>
                <Image src={IconCss} alt="CSS" />
                <DescriptionSkills>CSS</DescriptionSkills>
            </Skills>
            <Skills>
                <Image src={IconTs} alt="TypeScript" />
                <DescriptionSkills>TypeScript</DescriptionSkills>
            </Skills>
            <Skills>
                <Image src={IconJava} alt="Java" />
                <DescriptionSkills>Java</DescriptionSkills>
            </Skills>
            <Skills>
                <Image src={IconCypress} alt="Cypress" />
                <DescriptionSkills>Cypress</DescriptionSkills>
            </Skills>
            <Skills>
                <Image src={IconNode} alt="Node JS" />
                <DescriptionSkills>Node JS</DescriptionSkills>
            </Skills>
            <Skills>
                <Image src={IconSelenium} alt="Selenium" />
                <DescriptionSkills>Selenium</DescriptionSkills>
            </Skills>
            <Skills>
                <Image src={IconPostman} alt="Postman" />
                <DescriptionSkills>Postman</DescriptionSkills>
            </Skills>
            <Skills>
                <Image src={IconSwagger} alt="Swagger" />
                <DescriptionSkills>Swagger</DescriptionSkills>
            </Skills>
        </ContainerSkills>
        </Container>
    );
    });

export default technicalSkills;
import { useState } from "react";
import { 
    Container, 
    ContainerExp, 
    ContainerExp2, 
    ContainerTrue, 
    DescriptionExp, 
    Experiences, 
    FirmExp, 
    H1About, 
    H2About, 
    NameExp, 
    SpanExp, 
    SpanExpDesc 
} from "./styles";

const ListExperiences = [
    {
        id: 1,
        name: "Estágio - Full-Stack",
        firm: "Compass Uol",
        description: (
            <>
                Full Stack Journey (<SpanExpDesc>Node.js & React</SpanExpDesc>) - AWS Cloud Context <br />
                <SpanExpDesc>Empresa:</SpanExpDesc> Scholarship Program - Compass UOL <br />
                <SpanExpDesc>Carga horária:</SpanExpDesc> 400 horas<br /><br />
                Descrição:<br />
                Programa intensivo de formação em desenvolvimento full stack, com foco em <SpanExpDesc>Node.js</SpanExpDesc>, 
                <SpanExpDesc>React</SpanExpDesc> e práticas voltadas para o ambiente <SpanExpDesc>AWS Cloud</SpanExpDesc>. Abrangendo conceitos avançados
                e práticas de desenvolvimento, o curso proporcionou habilidades para construir 
                aplicações web modernas e escaláveis.
            </>
        )
    },
    {
        id: 2,
        name: "Analista de Qualidade (QA)",
        firm: "Show tecnologia",
        description: (
            <>
                Quality Assurance - Test Automation<br/>
                <SpanExpDesc>Instituição:</SpanExpDesc> Show Tecnologia<br/>
                <SpanExpDesc>Período:</SpanExpDesc> 22/03/2024 a 30/08/2024<br/><br/>
                Descrição:<br />
                Atuação como analista de qualidade, com foco em testes automatizados e manuais. Utilização de ferramentas
                como <SpanExpDesc>Cypress</SpanExpDesc> e <SpanExpDesc>Postman</SpanExpDesc> para garantir a qualidade do software,
                identificando e corrigindo bugs e problemas de usabilidade.
            </>
        )
    },
    {
        id: 3,
        name: "Extensão - Full-Stack",
        firm: "IFPE Garanhuns",
        description: (
            <>
                Full Stack Development - Web Applications<br/>
                <SpanExpDesc>Instituição:</SpanExpDesc> IFPE Garanhuns<br/>
                <SpanExpDesc>Período:</SpanExpDesc> 01/02/2024 a atualmente<br/><br/>
                Descrição:<br />
                Curso de extensão em desenvolvimento full stack, com foco em <SpanExpDesc>Node.js</SpanExpDesc>, <SpanExpDesc>React</SpanExpDesc> e <SpanExpDesc>MongoDB</SpanExpDesc>.
                Desenvolvimento de aplicações web modernas e escaláveis, com ênfase em boas práticas e qualidade de código.
                Desenvolvimento de aplicações front-end e back-end em projetos de extensão para instituições sem fins lucrativos, utilizando 
                <SpanExpDesc>React</SpanExpDesc> e <SpanExpDesc>Node.js</SpanExpDesc>.
            </>
        )
    },
    {
        id: 4,
        name: "Desenvolvedor Front-end",
        firm: "Compass Uol",
        description: (
            <>
                Full Stack Development - Web Applications<br/>
                <SpanExpDesc>Instituição:</SpanExpDesc> Compass Uol<br/>
                <SpanExpDesc>Período:</SpanExpDesc> 01/09/2024 a atualmente<br/><br/>
                Descrição:<br />
                Atuação como desenvolvedor full stack, com foco em <SpanExpDesc>Node.js</SpanExpDesc>, <SpanExpDesc>React</SpanExpDesc> e <SpanExpDesc>MongoDB</SpanExpDesc>.
                Desenvolvimento de aplicações web modernas e escaláveis, com ênfase em boas práticas e qualidade de código.
            </>
        )
    }
];

const ProfessionalExperiences = () => {
    const [selectedExperience, setSelectedExperience] = useState(ListExperiences[0]);

    return (
        <Container>
            <H1About>Experiências Profissionais</H1About>
            <ContainerTrue>
                <ContainerExp>
                    {ListExperiences.map((experience) => (
                        <Experiences 
                            key={experience.id} 
                            onClick={() => setSelectedExperience(experience)}
                        >
                            <NameExp>{experience.name}</NameExp>
                            <FirmExp>{experience.firm}</FirmExp>
                        </Experiences>
                    ))}
                </ContainerExp>
                <ContainerExp2>
                    <H2About>
                        {selectedExperience.name} <SpanExp>{selectedExperience.firm}</SpanExp>
                    </H2About>
                    <DescriptionExp>
                        {selectedExperience.description}
                    </DescriptionExp>
                </ContainerExp2>
            </ContainerTrue>
        </Container>
    );
};

export default ProfessionalExperiences;

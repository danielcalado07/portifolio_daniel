import { forwardRef } from "react";
import { Container, ContainerContacts, ContainerItem, H1About, Image, Text } from "./styles"
import { Email, Github, Linkedin } from "../../assets/images";

const Contacts = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <Container ref = {ref}>
            <H1About>Contacts</H1About>
            <ContainerContacts>
                <ContainerItem>
                    <Image src={Linkedin} alt="Linkedin" onClick={() => window.open('https://www.linkedin.com/in/daniel-calado-a1950a159/')}/>
                    <Text>Linkedin</Text>
                </ContainerItem>
                <ContainerItem>
                    <Image src={Github} alt="Github" onClick={() => window.open('https://github.com/danielcalado07')}/>
                    <Text>Github</Text>
                </ContainerItem>
                <ContainerItem>
                    <Image src={Email} alt="Email" onClick={() => window.open('mailto:danielcalado159@gmail.com')}/>
                    <Text>Email</Text>
                </ContainerItem>
            </ContainerContacts>
        </Container>
    )
});

export default Contacts;
import { Container, Nav, Item, H1Titulo } from "./styles";

const  navBar = () => {
  return (
    <Container>
        <Nav>
            <H1Titulo>DANIEL CALADO</H1Titulo>
        </Nav>
        <Nav>
            <Item>About</Item>
            <Item>Projetos</Item>
            <Item>Contato</Item>
        </Nav>
    </Container>
  );
}

export default navBar;
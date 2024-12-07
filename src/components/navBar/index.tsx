import { Container, Nav, Item, H1Titulo } from "./styles";

interface NavBarProps {
  onScrollToAbout: () => void;
  onScrollToProjects: () => void;
  onScrollToContacts: () => void;
}

const NavBar = ({ onScrollToAbout, onScrollToProjects, onScrollToContacts }: NavBarProps) => {
  return (
    <Container>
      <Nav>
        <H1Titulo>DANIEL CALADO</H1Titulo>
      </Nav>
      <Nav>
        <Item onClick={onScrollToAbout}>About</Item>
        <Item onClick={onScrollToProjects}>Experiences</Item>
        <Item onClick={onScrollToContacts}>Contacts</Item>
      </Nav>
    </Container>
  );
};

export default NavBar;

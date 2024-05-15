import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap"
import '../styles/Navbar.css'

export const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Mine Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about-us">Quienes Somos</NavDropdown.Item>
              <NavDropdown.Item href="/trajectory">Trayectoria</NavDropdown.Item>
              <NavDropdown.Item href="/projects">Proyectos</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Factibilidad</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

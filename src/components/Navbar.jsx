import { Container, Form, Nav, NavDropdown, NavItem, Navbar } from "react-bootstrap"
import '../styles/Navbar.css'
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";

export const NavbarComponent = () => {
  const useLanguage = () => useContext(LanguageContext);

  const { t, changeLanguage,language  } = useLanguage();

  const handleLanguageToggle = () => {
    changeLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Mine Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavItem className="align-items-center">
              <Form className="d-flex">
                <Form.Check
                  type="switch"
                  id="languageSwitch"
                  label={language === 'en' ? t.navbar.english : t.navbar.spanish}
                  checked={language === 'en'}
                  onChange={handleLanguageToggle}
                />
              </Form>
            </NavItem>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about-us">{t.navbar.aboutUs}</NavDropdown.Item>
              <NavDropdown.Item href="/trajectory">{t.navbar.trajectory}</NavDropdown.Item>
              <NavDropdown.Item href="/projects">{t.navbar.projects}</NavDropdown.Item>
              <NavDropdown.Item href="/contact">{t.navbar.contact}</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

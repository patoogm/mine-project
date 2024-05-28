import { Footer } from "../components/Footer";
import { NavbarComponent } from "../components/Navbar";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import "../styles/Projects.css";
import {Col, Container, Row} from "react-bootstrap";
import { TableProjects } from "../components/Table";

export const Projects = () => {
  const useLanguage = () => useContext(LanguageContext);
  const { t } = useLanguage();

  return (
    <>
      <NavbarComponent />
      <div className="img">
        <section className="imgTextProjects">
          <h1>{t.projects.heading}</h1>
        </section>
      </div>
      <Container className="tableContainer">
        <Row>
          <Col>
            <TableProjects projectName={"El Quemado"} locationProject={"Puna Salteña"} description={"Prueba de Tabla"}/>
          </Col>        
        </Row>
      </Container>
      <Footer />
    </>
  );
};

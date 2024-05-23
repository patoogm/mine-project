import { Col, Container, Row } from "react-bootstrap";
import "../styles/Main.css";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export const Main = () => {
  const useLanguage = () => useContext(LanguageContext);

  const { t } = useLanguage();
  return (
    <div>
      <div className="img">
        <section className="imgText">
          <h1>{t.main.heading}</h1>
          <p>{t.main.description}</p>
        </section>
      </div>
      <Container className="infoBlock">
        <Row sm={12}>
          <Col sm={12}>
            Puesta en valor de proyectos y actividades mineras
          </Col>
        </Row>
        <Row sm={12}>
          <Col sm={12} md={4}>
            <a>Lorem ipsum</a>
          </Col>
          <Col sm={12} md={4}>
            <a>Lorem ipsum</a>
          </Col>
          <Col sm={12} md={4}>
            <a>Lorem ipsum</a>
          </Col>
          <Col sm={12} md={4}>
            <a>Lorem ipsum</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

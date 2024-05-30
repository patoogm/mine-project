import { Col, Container, Row } from "react-bootstrap";
import "../styles/Main.css";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const useLanguage = () => useContext(LanguageContext);
  const { t } = useLanguage();
  const navigate = useNavigate();
  const handleNavigate = (location) => {
    navigate(location);
  };

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
          <Col sm={12}>Puesta en valor de proyectos y actividades mineras</Col>
        </Row>
        <Row sm={12}>
          <Col sm={12} md={4}>
            <a onClick={() => handleNavigate("/about-us")}>
              {t.navbar.aboutUs}
            </a>
          </Col>
          <Col sm={12} md={4}>
            <a onClick={() => handleNavigate("/our-team")}>
              {t.navbar.trajectory}
            </a>
          </Col>
          <Col sm={12} md={4}>
            <a onClick={() => handleNavigate("/projects")}>
              {t.navbar.projects}
            </a>
          </Col>
          <Col sm={12} md={4}>
            <a onClick={() => handleNavigate("/contact")}>{t.navbar.contact}</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

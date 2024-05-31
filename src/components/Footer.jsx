import { Col, Row } from "react-bootstrap";
import "../styles/Footer.css";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export const Footer = () => {
  const useLanguage = () => useContext(LanguageContext);

  const { t } = useLanguage();

  return (
    <div className="footer-container">
      <Row sm={12}>
        <Col sm={12} lg={6}>
          <h1>{t.footer.name}</h1>
          <p>
            {t.footer.name}, {t.footer.description}
          </p>
        </Col>
        <Col sm={12} lg={6}>
          <Col>
            <h2>{t.footer.contactUs}</h2>
          </Col>
          <Col>
            <p>Sinclair 3244, 2do piso, CABA, Argentina</p>
          </Col>
          <Col>
            <p>(+5411) 4774 8567</p>
          </Col>
          <Col>
            <p>info@consorciominero.com</p>
          </Col>
        </Col>
      </Row>
      <Row sm={12}>
        <Col>
          <p>
            Copyright Consorcio Minero S.A. 2024 - All Rights Reserved |
            Desarrollado por JTDIGITALT
          </p>
        </Col>
      </Row>
    </div>
  );
};

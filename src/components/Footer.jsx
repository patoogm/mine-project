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
          <h1>Eoliasur</h1>
          <p>
            Eoliasur, fundada en 2011, nace con la visión de ser un actor clave
            en la transformación de la matriz energética a través del desarrollo
            de energías renovables.
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
            <p>info@eoliasur.com</p>
          </Col>
        </Col>
      </Row>
      <Row sm={12}>
        <Col>
          <p>
            Copyright Eolia Renovables S.A. 2024 - All Rights Reserved |
            Desarrollado por JTDIGITALT
          </p>
        </Col>
      </Row>
    </div>
  );
};

import { Col, Row } from "react-bootstrap";
import "../styles/Footer.css";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import logo from '../statics/logo1.png'


export const Footer = () => {
  const useLanguage = () => useContext(LanguageContext);

  const { t } = useLanguage();

  return (
    <div className="footer-container">
      <Row sm={12}>
        <Col sm={12} lg={6}>
          <div className="d-flex justify-content-center">
            <img className="img-logo-footer" src={logo} alt="logo" />
          </div>
        </Col>
        <Col sm={12} lg={6}>
          <Col>
            <h2>{t.footer.contactUs}</h2>
          </Col>
          <Col className="my-2">
            <p>(+5411) 4774 8567</p>
          </Col>
          <Col className="my-2">
            <p>(+5411) 4774 8567</p>
          </Col>
          <Col className="my-2">
            <p>(+5411) 4774 8567</p>
          </Col>
          <Col className="my-2">
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

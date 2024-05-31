import { Footer } from "../components/Footer";
import { NavbarComponent } from "../components/Navbar";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import "../styles/AboutUs.css";
import { Col, Container, Row } from "react-bootstrap";

export const AboutUs = () => {
  const useLanguage = () => useContext(LanguageContext);
  const { t } = useLanguage();

  return (
    <>
      <NavbarComponent />
      <div className="img">
        <section className="imgTextAboutUs">
          <h1>{t.aboutUs.heading}</h1>
        </section>
      </div>
      <Container className="aboutUsContainer">
        <Row>
          
        </Row>
        <Row className="companyInfo">
          <Col>
            <h1>{t.main.heading}</h1>
            <p>{t.aboutUs.aboutUsText1}</p>
            <p>{t.aboutUs.aboutUsText2}</p>
            <p>{t.aboutUs.aboutUsText3}</p>
            <p>{t.aboutUs.aboutUsText4}</p>
          </Col>
          <Col>
            <h1>{t.aboutUs.ourTask}</h1>
            <p>{t.aboutUs.ourTaskText1}</p>
            <p>{t.aboutUs.ourTaskText2}</p>
            <p>{t.aboutUs.ourTaskText3}</p>
            <p>{t.aboutUs.ourTaskText4}</p>
            <p>{t.aboutUs.ourTaskText5}</p>
            <p>{t.aboutUs.ourTaskText6}</p>
            <p>{t.aboutUs.ourTaskText7}</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

import { Col, Row } from "react-bootstrap";
import { Footer } from "../components/Footer";
import { NavbarComponent } from "../components/Navbar";
import { UserCard } from "../components/UserCard";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import juanTImage from "../statics/juant.jpg";
import victorTImage from "../statics/victort.jpg";
import enriquePAImage from "../statics/enriquepa.jpg";
import alejandroSImage from "../statics/alejandros.jpg";
import nicolasHImage from "../statics/nicolash.jpg";
import alvaroGImage from "../statics/alvarog.jpg";
import enriqueVImage from "../statics/enriquev.jpg";
import "../styles/AboutUs.css";

export const OurTeam = () => {
  const useLanguage = () => useContext(LanguageContext);
  const { t } = useLanguage();

  return (
    <>
      <NavbarComponent />
      <Row className="gx-0 my-4 ourTeamInfo justify-content-center">
        <Col sm={12}>
          <h1>{t.aboutUs.ourTeamTitle}</h1>
        </Col>
        <Col className="my-4" sm={10}>
          <p>{t.aboutUs.ourTeamText1}</p>
          <p>{t.aboutUs.ourTeamText2}</p>
        </Col>
        <Row className="cardsArea">
          <Col sm={12} lg={4} md={6}>
            <UserCard
              name="Juan Taussig"
              role="CEO"
              info={t.aboutUs.juanT}
              imageSrc={juanTImage}
            />
          </Col>
          <Col sm={12} lg={4} md={6}>
            <UserCard
              name="Enrique Vidal"
              role="CEO"
              info={t.aboutUs.enriqueV}
              imageSrc={enriqueVImage}
            />
          </Col>
          <Col sm={12} lg={4} md={6}>
            <UserCard
              name="Víctor Taussig"
              role="CEO"
              info={t.aboutUs.victorT}
              imageSrc={victorTImage}
            />
          </Col>
          <Col sm={12} lg={4} md={6}>
            <UserCard
              name="Enrique Perez Antich"
              role="CEO"
              info={t.aboutUs.enriquePA}
              imageSrc={enriquePAImage}
            />
          </Col>
          <Col sm={12} lg={4} md={6}>
            <UserCard
              name="Alejandro Emilio Sanchez"
              role="CEO"
              info={t.aboutUs.alejandroS}
              imageSrc={alejandroSImage}
            />
          </Col>
          <Col sm={12} lg={4} md={6}>
            <UserCard
              name="Nicolás Herrera"
              role="CEO"
              info={t.aboutUs.nicolasH}
              imageSrc={nicolasHImage}
            />
          </Col>
          <Col sm={12} lg={4} md={6}>
            <UserCard
              name="Álvaro D. Guerrero"
              role="CEO"
              info={t.aboutUs.alvaroG}
              imageSrc={alvaroGImage}
            />
          </Col>
        </Row>
      </Row>
      <Footer />
    </>
  );
};

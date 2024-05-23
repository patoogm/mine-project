import { Footer } from "../components/Footer";
import { NavbarComponent } from "../components/Navbar";
import { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import "../styles/AboutUs.css";
import { Button, Col, Container, Row, Card, Modal } from "react-bootstrap";

export const AboutUs = () => {
  const useLanguage = () => useContext(LanguageContext);
  const { t } = useLanguage();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Col className="btnInPage">
            <Button href="#aboutCompany" variant="light">
              Empresa
            </Button>
            <Button href="#teamInfo" variant="light">
              Equipo
            </Button>
          </Col>
        </Row>
        <Row className="companyInfo">
          <Col id="aboutCompany">
            <h1>Empresa</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </Col>
          <Col>
            <h1>Nuestro objetivo</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
          <Col>
            <h1>¿Que hacemos al respecto?</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
        </Row>
        <Row id="teamInfo">
          <Col sm={12}>
            <h1>Nuestro Equipo</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
          <Row className="cardsArea">
            <Col sm={12} lg={4} md={6}>
              <Card style={{ width: "18rem" }} onClick={handleShow}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you are reading this text in a modal!
                </Modal.Body>
              </Modal>
            </Col>
            <Col sm={12} lg={4} md={6}>
              <Card style={{ width: "18rem" }} onClick={handleShow}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you are reading this text in a modal!
                </Modal.Body>
              </Modal>
            </Col>
            <Col sm={12} lg={4} md={6}>
              <Card style={{ width: "18rem" }} onClick={handleShow}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you are reading this text in a modal!
                </Modal.Body>
              </Modal>
            </Col>
          </Row>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

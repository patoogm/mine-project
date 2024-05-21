import { Col, Container, Row } from "react-bootstrap";
import "../styles/Main.css";

export const Main = () => {
  return (
    <div>
      <div className="img">
        <section className="imgText">
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </section>
      </div>
      <Container className="infoBlock">
        <Row sm={12}>
          <Col sm={12}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
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

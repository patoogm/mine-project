import "../styles/Cards.css";
import { Card, Col, Modal, Row } from "react-bootstrap";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export const UserCard = ({ name, role, info, imageSrc }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: "20rem" }} onClick={handleShow}>
        <Row className="g-0 imgContainer">
          <Card.Img variant="top" src={imageSrc} />
          <i className="bi bi-plus-circle-fill plusIcon"></i>
        </Row>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{role}</Card.Text>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} lg={6} md={6} className="d-flex justify-content-center">
              <img className="img-modal" src={imageSrc} alt="" />
            </Col>
            <Col sm={12} lg={6} md={6}>
              {info}
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

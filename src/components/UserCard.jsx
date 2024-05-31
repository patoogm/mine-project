import "../styles/AboutUs.css";
import { Card, Col, Modal, Row } from "react-bootstrap";
import { useState } from "react";

export const UserCard = ({name, role, info, imageSrc}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: "20rem" }} onClick={handleShow}>
        <Card.Img variant="top" src={imageSrc} />
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
            <Col sm={12} lg={6} md={6}>
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

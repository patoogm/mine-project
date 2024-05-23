import "../styles/AboutUs.css";
import { Card, Col, Modal, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";
import "../styles/AboutUs.css";

export const UserCard = ({name, role, info}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ width: "18rem" }} onClick={handleShow}>
        <Card.Img variant="top" src="holder.js/100px180" />
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
              Imagen
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

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};
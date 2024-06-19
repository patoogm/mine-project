import { Button, Modal } from "react-bootstrap";
import "../styles/Projects.css";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export const ProjectList = ({item}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ul>
        {
          !item.visible &&
          <li className="m-3">
            <i className="bi bi-circle-fill"></i>
            <span className="project-text"> {item.name} - </span>
            <span className="project-text">{item.location} - </span>
            <span className="project-text">{item.description}  </span>
            <Button className="custom-info-button"  onClick={handleShow}>INFO</Button>
          </li>
        }
      </ul>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {item.paragraphs.map((paragraph) => (
            <p key={item.name}>{paragraph}</p>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
};

import { Button, Modal } from "react-bootstrap";
import "../styles/Projects.css";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export const TableProjects = ({
  projectName,
  locationProject,
  description,
  modal,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ul>
        <li className="m-3">
          <i className="bi bi-minecart-loaded"></i>
          <span> {projectName} - </span>
          <span>{locationProject} - </span>
          <span>{description} - </span>
          <Button variant="primary" onClick={handleShow}>
            INFO
          </Button>
        </li>
      </ul>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{projectName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modal}</Modal.Body>
      </Modal>
    </>
  );
};

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
          <i className="bi bi-circle-fill"></i>
          <span className="project-text"> {projectName} - </span>
          <span className="project-text">{locationProject} - </span>
          <span className="project-text">{description} - </span>
          <Button className="custom-info-button"  onClick={handleShow}>
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

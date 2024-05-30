import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import "../styles/Projects.css";
import { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export const TableProjects = ({
  projectName,
  locationProject,
  description,
}) => {
  const useLanguage = () => useContext(LanguageContext);
  const { t } = useLanguage();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ul>
        <li className="m-3">
          <span>{projectName} - </span>
          <span>{description} - </span>
          <span>{locationProject} - </span>
          <Button variant="primary" onClick={handleShow}>
            INFO
          </Button>
        </li>
        <li className="m-3">
          <span>{projectName} - </span>
          <span>{description} - </span>
          <span>{locationProject} - </span>
          <Button variant="success" onClick={handleShow}>
            INFO
          </Button>
        </li>
        <li className="m-3">
          <span>{projectName} - </span>
          <span>{description} - </span>
          <span>{locationProject} - </span>
          <Button variant="success" onClick={handleShow}>
            INFO
          </Button>
        </li>
      </ul>
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>{projectName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{t.projects.aboutProject}</Modal.Body>
      </Modal>
    </>
  );
};

TableProjects.PropTypes = {
  projectName: PropTypes.string.isRequired,
  locationProject: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

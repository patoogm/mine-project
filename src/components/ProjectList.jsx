import { Button, Modal } from "react-bootstrap";
import "../styles/Projects.css";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export const ProjectList = ({ item }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const images = item.images || ["", ""];
  const validImages = images.filter((image) => image);

  return (
    <>
      <ul>
        {!item.visible && (
          <li className="m-3">
            <i className="bi bi-circle-fill"></i>
            <span className="project-text"> {item.name} - </span>
            <span className="project-text">{item.location} - </span>
            <span className="project-text">{item.description} </span>
            <Button className="custom-info-button" onClick={handleShow}>
              INFO
            </Button>
          </li>
        )}
      </ul>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-evenly img-modal-container">
            {validImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Imagen ${index + 1}`}
                className="img-fluid mb-3 image-modal"
              />
            ))}
          </div>
          {item.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
};

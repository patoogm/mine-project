import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { AdminInputs } from "./AdminInputs";
import useAuth from "../hooks/useAuth";

export const AdminTable = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");
  const { token } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);
  const [confirmDeleteProject, setConfirmDeleteProject] = useState(null);

  const handleClose = () => {
    setShowModal(false);
    setShowModalDelete(false);
    setSelectedProject(null);
  };

  const handleConfirmDelete = (projectId) => {
    setConfirmDeleteProject(projectId);
    setShowModalDelete(true);
  };

  const handleDelete = async (projectId) => {
    try {
      const response = await fetch(
        `https://mine-project-be-def.onrender.com/delete/${projectId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      if (response.ok) {
        fetchProjects();
        handleClose();
      } else {
        const errorMessage = await response.text();
        console.error("Error al eliminar el proyecto:", errorMessage);
      }
    } catch (error) {
      console.error("Error al eliminar el proyecto:", error);
    }
  };

  const handleHide = async (projectId) => {
    try {
      const response = await fetch(
        `https://mine-project-be-def.onrender.com/projects/hide/${projectId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      if (response.ok) {
        fetchProjects();
      } else {
        const errorMessage = await response.text();
        console.error("Error al ocultar el proyecto:", errorMessage);
      }
    } catch (error) {
      throw new Error();
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await fetch("https://mine-project-be-def.onrender.com/projects", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
        setError("");
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch (error) {
      setError("Error al obtener los proyectos");
    }
  };

  useEffect(() => {
    if (token) {
      fetchProjects();
    }
  }, [token]);

  const handleProjectAdded = () => {
    fetchProjects();
    handleClose();
  };

  const handleEdit = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <div className="adminPanelContainer">
      <div className="container bg-secondary h-100 ">
        {error && (
          <Alert variant="danger" className="text-center">
            {error}
          </Alert>
        )}
        <Row className="p-1">
          <Col className="m-5 d-flex flex-column align-items-center">
            <h2 className="text-white">Panel de Administración</h2>
            <Button
              className="mx-3 w-25 btnAdm"
              onClick={() => handleEdit(null)}
            >
              <i className="bi bi-plus"> Agregar Proyecto</i>
            </Button>
          </Col>
          <Table bordered hover>
            <thead>
              <tr>
                <th>Nombre del Proyecto</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id}>
                  <td>{project.name}</td>
                  <td>
                    <Button
                      className="mx-3  btnAdm"
                      onClick={() => handleEdit(project)}
                    >
                      <i className="bi bi-pencil"> Editar</i>
                    </Button>
                    {!project.visible ? (
                      <Button
                        className="mx-3  btnAdm"
                        onClick={() => handleHide(project.id)}
                      >
                        <i className="bi bi-eye-fill"> Mostrar</i>
                      </Button>
                    ) : (
                      <Button
                        className="mx-3"
                        onClick={() => handleHide(project.id)}
                      >
                        <i className="bi bi-eye-slash"> Ocultar</i>
                      </Button>
                    )}
                    <Button
                      variant="danger"
                      className="mx-3"
                      onClick={() => handleConfirmDelete(project.id)}
                    >
                      <i className="bi bi-trash"> Eliminar</i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>

        <Modal show={showModalDelete} onHide={handleClose} size="md">
          <Modal.Header closeButton>
            <Modal.Title>Confirmar Eliminación</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>¿Estás seguro que deseas eliminar este proyecto?</p>
            <Button variant="secondary" className="m-2" onClick={handleClose}>
              Cancelar
            </Button>
            <Button
              variant="danger"
              className="m-2"
              onClick={() => handleDelete(confirmDeleteProject)}
            >
              Eliminar
            </Button>
          </Modal.Body>
        </Modal>

        <Modal
          show={showModal}
          onHide={handleClose}
          size="xl"
          className="w-100"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {selectedProject ? "Editar Proyecto" : "Agregar Proyecto"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AdminInputs
              project={selectedProject}
              onProjectAdded={handleProjectAdded}
            />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

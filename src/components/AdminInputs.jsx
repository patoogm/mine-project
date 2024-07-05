import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import "../styles/AdminPanel.css";
import useAuth from "../hooks/useAuth";
import { FormGroup } from "react-bootstrap";

export const AdminInputs = ({ project, onProjectAdded }) => {
  const { token } = useAuth();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [paragraphs, setParagraphs] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [images, setImages] = useState(["", ""]);

  useEffect(() => {
    if (project) {
      setId(project.id || "");
      setName(project.name);
      setLocation(project.location);
      setDescription(project.description);
      setParagraphs(project.paragraphs || ["", "", "", ""]);
      setImages(project.images || ["", ""]);
    } else {
      setId("");
      setName("");
      setLocation("");
      setDescription("");
      setParagraphs(["", "", "", ""]);
      setImages(["", ""]);
    }
  }, [project]);

  const handleParagraphChange = (index, value) => {
    const newParagraphs = [...paragraphs];
    newParagraphs[index] = value;
    setParagraphs(newParagraphs);
  };

  const handleImageChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...images];
        newImages[index] = reader.result;
        setImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddParagraph = () => {
    setParagraphs([...paragraphs, ""]);
  };

  const handleDeleteParagraph = (index) => {
    const newParagraphs = [...paragraphs];
    newParagraphs.splice(index, 1);
    setParagraphs(newParagraphs);
  };

  const handleSubmit = async () => {
    const projectId = id || uuidv4();

    const newProject = {
      id: projectId,
      name,
      location,
      description,
      paragraphs,
      images: images.filter((image) => image), // Filtra imágenes vacías
    };

    try {
      const response = await fetch(
        `https://mine-project-be-def.onrender.com${project ? `/edit/${projectId}` : "/add"}`,
        {
          method: project ? "PATCH" : "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(newProject),
        }
      );

      if (response.ok) {
        setSuccess("Proyecto agregado/exitosamente");
        setError("");
        onProjectAdded();
      } else {
        const errorMessage = await response.text();
        setError(`Error al agregar/el proyecto: ${errorMessage}`);
        setSuccess("");
      }
    } catch (error) {
      console.error("Error al agregar/el proyecto:", error);
      setError("Error al procesar la solicitud");
      setSuccess("");
    }
  };

  return (
    <div>
      <section className="w-100 d-flex flex-column justify-content-center align-items-center bg-secondary py-4">
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <Form className="w-75 py-2 bg-light d-flex flex-column align-items-center">
          <FormGroup className="d-flex flex-row w-100">
            <Form.Group className="p-3 w-50" controlId="formBasicName">
              <Form.Label>Nombre del proyecto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre del proyecto"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="p-3 w-50" controlId="formBasicLocation">
              <Form.Label>Ubicación</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ubicación"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>
          </FormGroup>
          <Form.Group className="p-3 w-100" controlId="formBasicDescription">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              placeholder="Descripción"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          {paragraphs.map((paragraph, index) => (
            <div className="p-3 w-100 d-flex" key={index}>
              <Form.Group
                className="p-2 w-100"
                controlId={`formBasicParagraph${index}`}
              >
                <Form.Label>Párrafo {index + 1}</Form.Label>
                <div className="d-flex justify-content-between">
                  <Form.Control
                    type="text"
                    placeholder={`Párrafo ${index + 1}`}
                    value={paragraph}
                    onChange={(e) =>
                      handleParagraphChange(index, e.target.value)
                    }
                    className="w-75"
                  />
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteParagraph(index)}
                  >
                    Eliminar Párrafo
                  </Button>
                </div>
              </Form.Group>
            </div>
          ))}

          <Button
            variant="secondary"
            type="button"
            onClick={handleAddParagraph}
          >
            + Agregar Párrafo
          </Button>

          {images.map((image, index) => (
            <Form.Group
              className="p-3 w-100"
              controlId={`formBasicImage${index}`}
              key={index}
            >
              <Form.Label>Imagen {index + 1}</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(index, e)}
              />
            </Form.Group>
          ))}

          <Button
            variant="info"
            type="button"
            className="pb-2 mt-3 adminPanelBtn"
            onClick={handleSubmit}
          >
            Enviar
          </Button>
        </Form>
      </section>
    </div>
  );
};

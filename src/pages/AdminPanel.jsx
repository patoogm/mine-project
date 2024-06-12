import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/AdminPanel.css";

export const AdminPanel = () => {
  return (
    <div>
      <section className="w-100 d-flex flex-column justify-content-center align-items-center bg-secondary  pb-4">
        <h1>Panel de Administración</h1>
        <Form className="w-50 bg-light d-flex flex-column align-items-center">
          <Form.Group className="p-3 w-100" controlId="formBasicEmail">
            <Form.Label>Nombre del proyecto</Form.Label>
            <Form.Control type="text" placeholder="Normal text" />
          </Form.Group>

          <Form.Group className="p-3 w-100" controlId="formBasicPassword">
            <Form.Label>Ubicación</Form.Label>
            <Form.Control type="text" placeholder="Normal text" />
          </Form.Group>

          <Form.Group className="p-3 w-100" controlId="formBasicPassword">
            <Form.Label>Parrafo</Form.Label>
            <Form.Control type="text" placeholder="Normal text" />
          </Form.Group>

          <Form.Group className="p-3 w-100" controlId="formBasicPassword">
            <Form.Label>Parrafo</Form.Label>
            <Form.Control type="text" placeholder="Normal text" />
          </Form.Group>

          <Form.Group className="p-3 w-100" controlId="formBasicPassword">
            <Form.Label>Parrafo</Form.Label>
            <Form.Control type="text" placeholder="Normal text" />
          </Form.Group>

          <Form.Group className="p-3 w-100" controlId="formBasicPassword">
            <Form.Label>Parrafo</Form.Label>
            <Form.Control type="text" placeholder="Normal text" />
          </Form.Group>

          <Form.Group className="p-3 w-100" controlId="formBasicPassword">
            <Form.Label>Parrafo</Form.Label>
            <Form.Control type="text" placeholder="Normal text" />
          </Form.Group>
          <Button variant="info" type="button" className="pb-2">
            Enviar
          </Button>
        </Form>
      </section>
    </div>
  );
};

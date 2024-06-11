import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const [validated, setValidated] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      try {
        const formData = new URLSearchParams();
        formData.append('user', username);
        formData.append('password', password);

        const response = await fetch('http://localhost:3000/authLogin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData,
        });
        if (response.ok) {
          const data = await response.json();
          const { token } = data;
          login(token);
          navigate("/admin");
        } else {
          const errorMessage = await response.text();
          setError(errorMessage);
          console.error("Error en la solicitud:", errorMessage);
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        setError("Credenciales incorrectas");
      }
    }
    setValidated(true);
  };

  return (
    <div className="loginContainer">
      <section className="w-100 d-flex flex-column align-items-center pt-4">
        <h1>Acceso Administración</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="w-50 bg-body-secondary">
          <Form.Group className="m-3" controlId="formBasicEmail">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ingrese su usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
            />
            <Form.Control.Feedback type="invalid">
              Por favor ingrese un usuario
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="m-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Ingrese su contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            />
            <Form.Control.Feedback type="invalid">
            Por favor ingrese una contraseña
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="info" type="submit" className="m-3">
            Submit
          </Button>
          {error && (
            <div className="d-flex justify-content-center">
              <Alert variant="danger" className="w-50 text-center">
                {error}
              </Alert>
            </div>
          )}
        </Form>
      </section>
    </div>
  );
};

export default Login;

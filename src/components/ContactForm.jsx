import { useContext, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Modal,
} from "react-bootstrap";
import { LanguageContext } from "../contexts/LanguageContext";
import "../styles/ContactForm.css";
import axios from "axios";

export const ContactForm = () => {
  const [isLoading, setisLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    file: null,
    comments: "",
  });
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowError = () => setShowError(true);
  const handleCloseError = () => setShowError(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setisLoading(true);
      try {
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('phone', formData.phone);
        formDataToSend.append('comments', formData.comments);
        if (formData.file) {
          formDataToSend.append('file', formData.file);
        }
  
        const response = await axios.post('https://mine-project-be.onrender.com/send-email', formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        if (response.status === 200) {
          handleShow(true);
        } else {
          handleShowError(true);
        }
      } catch (error) {
        console.error("Error:", error);
        handleShowError(true);
      } finally {
        setisLoading(false);
      }
    }
    setValidated(true);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const useLanguage = () => useContext(LanguageContext);
  const { t } = useLanguage();

  return (
    <>
      <div className="form-container">
        <Row sm={12} className="justify-content-center">
          <Col sm={12} lg={5}>
            <h2>{t.contact.title}</h2>
            <p className="my-4">{t.contact.messageFirstLine}</p>
            <p className="my-4">{t.contact.messageSecondLine}</p>
          </Col>
          <Col sm={12} lg={5}>
            <Container>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-4">
                  <Form.Group as={Col} md="12" controlId="validationCustom01">
                    <Form.Control
                      required
                      type="text"
                      placeholder={t.contact.namePlaceholder}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      {t.contact.nameError}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-4">
                  <Form.Group as={Col} md="12" controlId="validationCustom02">
                    <Form.Control
                      required
                      type="email"
                      placeholder={t.contact.mailPlaceholder}
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      {t.contact.mailError}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-4">
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustomUsername"
                  >
                    <InputGroup hasValidation>
                      <Form.Control
                        type="number"
                        placeholder={t.contact.phonePlaceholder}
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        {t.contact.phoneError}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-4">
                  <Form.Group as={Col} md="12" controlId="validationCustom03">
                    <Form.Control
                      type="file"
                      accept=".pdf"
                      name="file"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-4">
                  <Form.Group as={Col} md="12" controlId="validationCustom04">
                    <Form.Control
                      as="textarea"
                      placeholder={t.contact.commentsPlaceholder}
                      style={{ height: "100px" }}
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Row>
                <Button className="custom-info-button" type="submit">
                  {isLoading ? t.contact.loading : t.contact.sendButton}
                </Button>
              </Form>
            </Container>
          </Col>
        </Row>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{t.contact.emailSend}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{t.contact.emailText}</Modal.Body>
        </Modal>
        <Modal show={showError} onHide={handleCloseError}>
          <Modal.Header closeButton>
            <Modal.Title>{t.contact.emailError}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{t.contact.emailTextError}</Modal.Body>
        </Modal>
      </div>
    </>
  );
};

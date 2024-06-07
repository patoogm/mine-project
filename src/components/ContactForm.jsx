import { useContext, useState } from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap"
import { LanguageContext } from '../contexts/LanguageContext';
import '../styles/ContactForm.css'


export const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const useLanguage = () => useContext(LanguageContext);

  const { t } = useLanguage();

  return (
    <>
      <div className="form-container">
        <Row sm={12} className='justify-content-center'>
          <Col sm={12} lg={5}>
            <h2>{t.contact.title}</h2>
            <p className='my-4'>{t.contact.messageFirstLine}</p>
            <p className='my-4'>{t.contact.messageSecondLine}</p>
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
                    />
                    <Form.Control.Feedback type="invalid">
                      {t.contact.mailError}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-4">
                <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                  <InputGroup hasValidation>
                    <Form.Control
                      type="number"
                      placeholder={t.contact.phonePlaceholder}
                      required
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
                      accept='.pdf'
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-4">
                  <Form.Group as={Col} md="12" controlId="validationCustom04">
                    <Form.Control 
                      as="textarea"
                      placeholder={t.contact.commentsPlaceholder}
                      style={{ height: '100px' }}
                    />
                  </Form.Group>
                </Row>
                <Button className='custom-info-button' type="submit">{t.contact.sendButton}</Button>
              </Form>
            </Container>
          </Col>
        </Row>
      </div>
    </>
  )
}

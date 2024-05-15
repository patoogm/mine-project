import { Col, Row } from 'react-bootstrap'
import '../styles/Footer.css'

export const Footer = () => {
  return (
    <div className='footer-container'>
      <Row className='text-center'>
        <Col sm={12} lg={6}>Eoliasur, fundada en 2011, nace con la visión de ser un actor clave en la transformación de la matriz energética a través del desarrollo de energías renovables.</Col>
        <Col sm={12} lg={6}>
          <p>Sinclair 3244, 2do piso, CABA, Argentina</p>
          <p>(+5411) 4774 8567</p>
          <p>info@eoliasur.com</p>
        </Col>
      </Row>
      <Row>
        <Col>Copyright Eolia Renovables S.A. 2024 - All Rights Reserved | Desarrollado por JTDIGITAL</Col>
      </Row>
    </div>
  )
}

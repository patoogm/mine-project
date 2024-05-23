import { Col, Row } from 'react-bootstrap'
import { Footer } from '../components/Footer'
import { NavbarComponent } from '../components/Navbar'
import { UserCard } from '../components/UserCard'
import { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'

export const OurTeam = () => {
  const useLanguage = () => useContext(LanguageContext);
  const { t } = useLanguage();

  return (
    <>
      <NavbarComponent />
      <Row>
        <Col sm={12}>
          <h1>Nuestro Equipo</h1>
        </Col>
        <Row className="cardsArea">
          <Col sm={12} lg={4} md={6}>
            <UserCard name="Juan Taussig" role="CEO" info={t.aboutUs.juanT} />
          </Col>
          <Col sm={12} lg={4} md={6}>
            <UserCard name="Enrique Vidal" role="CEO" info={t.aboutUs.enriqueV} />
          </Col>
          <Col sm={12} lg={4} md={6}>
            <UserCard name="Víctor Taussig" role="CEO" info={t.aboutUs.victorT} />
          </Col>
          <Col sm={12} lg={4} md={6}>
            <UserCard name="Enrique Perez Antich" role="CEO" info={t.aboutUs.alejandroS} />
          </Col>
          <Col sm={12} lg={4} md={6}>
            <UserCard name="Alejandro Emilio Sanchez" role="CEO" info={t.aboutUs.nicolasH} />
          </Col>
          <Col sm={12} lg={4} md={6}>
            <UserCard name="Nicolás Herrera" role="CEO" info={t.aboutUs.nicolasH} />
          </Col>
          <Col sm={12} lg={4} md={6}>
            <UserCard name="Álvaro D. Guerrero" role="CEO" info={t.aboutUs.alvaroG} />
          </Col>
        </Row>
      </Row>
      <Footer />
    </>
  )
}

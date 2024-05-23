import { Footer } from "../components/Footer";
import { NavbarComponent } from "../components/Navbar";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import "../styles/AboutUs.css";
import { Button, Col, Container, Row } from "react-bootstrap";

export const AboutUs = () => {
  const useLanguage = () => useContext(LanguageContext);
  const { t } = useLanguage();

  return (
    <>
      <NavbarComponent />
      <div className="img">
        <section className="imgTextAboutUs">
          <h1>{t.aboutUs.heading}</h1>
        </section>
      </div>
      <Container className="aboutUsContainer">
        <Row>
          <Col className="btnInPage">
            <Button href="#aboutCompany" variant="light">
              Empresa
            </Button>
            <Button href="#teamInfo" variant="light">
              Equipo
            </Button>
          </Col>
        </Row>
        <Row className="companyInfo">
          <Col id="aboutCompany">
            <h1>CONSORCIO MINERO</h1>
            <p>
            CONSORCIO MINERO es un equipo de Empresarios y Profesionales de múltiples áreas, involucrados directamente en la actividad minera en Argentina, que busca aprovechar las experiencias individuales y beneficiarse de las mismas sinergias que resultan en compartirlas. 
            </p>
            <p>
            El largo camino recorrido por cada uno, desde una participación activa tanto en la evaluación, definición de proyectos, viabilidad de los desarrollos e INVERSIÓN, nos permiten aportar un abundante conocimiento en la consideración de nuevas alternativas que ARGENTINA presenta hoy con sus particulares circunstancias.
            </p>

            <p>Involucrados en proyectos de Tantalio, Cobalto, Litio, Oro y Cobre, Cales y otros minerales, hoy participamos ACTIVAMENTE, de las nuevas e interesantes posibilidades de desarrollo. </p>

            <p>Geólogos, Ingenieros, Abogados, Economistas, Administradores, compartimos desde la perspectiva de “tomador de riesgo”, las consideraciones que afectan la inversión, enriqueciendo la mirada sobre las inversiones. </p>
          </Col>
          <Col>
            <h1>Nuestra tarea</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita veniam blanditiis dolores atque dignissimos impedit quaerat exercitationem repellendus possimus fuga ratione debitis nemo quis officia tenetur iste doloremque ex dolore odio corrupti amet, quidem laborum. Culpa nostrum dignissimos ad iusto atque neque esse, molestiae a, provident iure inventore eveniet optio quia placeat aut omnis. Exercitationem esse deserunt culpa. Perferendis unde tempora impedit, asperiores, eligendi possimus exercitationem, in vitae laudantium hic perspiciatis deserunt aut voluptatibus veniam incidunt sed. Libero molestiae eaque quas magnam quidem, non consectetur blanditiis aliquam pariatur quasi deserunt illum officiis et corporis aut. Ipsum quia fugit laborum aut.</p>
            
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

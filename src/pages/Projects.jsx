import { Footer } from "../components/Footer";
import { NavbarComponent } from "../components/Navbar";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import "../styles/Projects.css";
import { Col, Container, Row } from "react-bootstrap";
import { TableProjects } from "../components/Table";

export const Projects = () => {
  const useLanguage = () => useContext(LanguageContext);
  const { t } = useLanguage();

  return (
    <>
      <NavbarComponent />
      <div className="img">
        <section className="imgTextProjects">
          <h1>{t.projects.heading}</h1>
        </section>
      </div>
      <Container className="tableContainer">
        <Row>
          <Col sm={12} className="d-flex justify-content-center">
            <TableProjects
              projectName={"El Quemado"}
              locationProject={"Puna Salteña"}
              description={"Columbio, Tantalio y Bismuto"}
              modal={
                "El Distrito Minero El Quemado, se localiza en la Puna Salteña, en el límite de los departamentos Cachi y La Poma. Se extiende en una faja de norte a sur de aproximadamente 70 kilómetros.Cubre una superficie del orden de las 50.000 Hectáreas, se ubica en la Sierra de Cachi, a 40 kilómetros en línea recta de dicha localidad, a una altura aproximada de 3.800 y 4.200 msnm. Está conformado por cuerpos pegmatíticos cuarzo-feldespato portadores de minerales de Litio, Tantalio, Columbio (o Niobio), Bismuto y Berilio, a los que se suman minerales del Grupo de las Tierras Raras detectándose el Cesio. Además de los cuerpos pegmatíticos portadores de minerales de interés económico, se localizan potentes aluviones portadores de minerales de Columbio, Tantalio y Bismuto que se formaron por acción erosiva a partir de los cuerpos primarios mineralizados (pegmatitas)."
              }
            />
          </Col>
          <Col sm={12} className="d-flex justify-content-center">
            <TableProjects
              projectName={"Carachi Pampa Lithium"}
              locationProject={"Provincia de San Juan"}
              description={"Prueba de Tabla"}
              modal={
                "Ubicada en el Distrito “Carachi Pampa”, Departamento de Antofagasta de la Sierra, provincia de Catamarca, Republica Argentina, aproximadamente a 40 Km. de la Localidad de Antofagasta de la Sierra y a 500 metros de la ruta provincial Nº43 la cual se encuentra pavimentada. Tiene una superficie mayor a las 3.000 Has.Con áreas aledañas confirmadas por la presencia de importantes empresas internacionales, Mina Beatriz se encuentra hoy en plena etapa de Inversión para la confirmación de recursos y obtención de la NI.43.101. Mina Beatriz se encuentra ubicada en la zona central de la cuenca del llamado Salar Escondido y sus condiciones para la explotación son óptimas. Existe información pública de los resultados sobre la etapa de exploración realizada por las empresas que trabajaron en la zona con excelentes perspectivas para la explotación."
              }
            />
          </Col>
          <Col sm={12} className="d-flex justify-content-center">
            <TableProjects
              projectName={"Medano Pelado - Proyecto “Calizas PAL”"}
              locationProject={"Provincia de Catamarca"}
              description={"Prueba de Tabla"}
              modal={
                "Ubicado en la Provincia de San Juan, Centro Norte San Juan - Departamentos: Albardón y Angaco. Aproximadamente a 35 Km. al Norte de la Ciudad de San Juan y a uan altura de  650 msnm aprox. Tiene una superficie Total: 8973 Ha S/Mensura. El proyecto está etapa de avaluación y con numerosos estudios de recursos REALIZADOS."
              }
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

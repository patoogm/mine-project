import { Footer } from "../components/Footer";
import { NavbarComponent } from "../components/Navbar";
import "../styles/Projects.css";
import { Col, Container, Row } from "react-bootstrap";
import { ProjectList } from "../components/ProjectList";
import CarouselProjects from "../components/Carousel";
import { useEffect, useState } from "react";

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("http://localhost:3000/projects", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      } else {
        const errorMessage = await response.text();
        console.error("Error en la solicitud:", errorMessage);
      }
    } catch (error) {
      console.error("Error al obtener los proyectos:", error);
    }
  };

  return (
    <>
      <NavbarComponent />
      <div>
        <CarouselProjects></CarouselProjects>
      </div>
      <Container className="tableContainer">
        <Row>
          {projects.map((item) => (
            <Col
              key={item.id}
              sm={12}
              className="d-flex justify-content-center"
            >
              <ProjectList item={item} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

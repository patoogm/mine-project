import { Carousel } from "react-bootstrap";
import Imagen1 from "../statics/imagen1.jpg";
import Imagen2 from "../statics/imagen2.jpg";
import Imagen3 from "../statics/imagen3.jpg";

const CarouselProjects = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src={Imagen1} className="imgProjects" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Imagen2} className="imgProjects" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Imagen3} className="imgProjects" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselProjects;

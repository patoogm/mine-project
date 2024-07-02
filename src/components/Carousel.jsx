import { Carousel } from "react-bootstrap";
import Imagen1 from "../statics/panel.jpg";
import Imagen2 from "../statics/eolico.jpg";
import Imagen3 from "../statics/mina.jpg";

const CarouselProjects = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src={Imagen1} className="imgProjects bottom-right" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Imagen2} className="imgProjects bottom-right" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Imagen3} className="imgProjects bottom-right" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselProjects;

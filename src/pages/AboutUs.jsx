import { Container } from 'react-bootstrap'
import { Footer } from '../components/Footer'
import { NavbarComponent } from '../components/Navbar'

export const AboutUs = () => {
  return (
    <>
      <NavbarComponent />
      <Container>
        <div>
          <span>Empresa</span>
          <p>
            Eoliasur es una empresa creada con el objetivo de desarrollar una plataforma internacional de proyectos, y expandir a nuevos verticales de energía renovable como el hidrógeno y almacenamiento.
          </p>

          <p>
            Realizamos todas las actividades vinculadas con el Desarrollo, desde la evaluación del sitio, diseño del Proyecto, hasta todos los estudios y permisos necesarios para su construcción.
          </p>
          <p>
            Nuestro objetivo
            La contaminación en todas sus formas es uno de los mayores desafíos del siglo XXI. En Eolia nos enfocamos en trabajar por un planeta mejor, que pueda ser disfrutado por todas las generaciones futuras. Es importante asumir esta responsabilidad hoy, antes que sea demasiado tarde.
          </p>
          <p>
            Las energías renovables están transformando la manera en que vivimos, y constituyen un pilar fundamental del camino hacia un modelo de desarrollo energético sustentable. Un modelo donde todos tengamos garantizado un acceso seguro, asequible y ambientalmente sostenible a la energía.
          </p>
          <p>
            ¿Qué hacemos al respecto?

            A través de nuestros proyectos renovables, contribuimos a la diversificación de la matriz energética de distintos países generando un equilibrio mas sustentable, una mayor independencia energética , reducción de costos, creación de puestos de trabajo, y dinamización de las economías locales.
          </p>
        </div>
      </Container>
      <Footer />
    </>
  )
}

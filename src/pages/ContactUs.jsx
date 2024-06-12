import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { NavbarComponent } from "../components/Navbar";
import "../styles/Main.css";
import Imagen5 from "../statics/imagen5.jpg";

export const ContactUs = () => {
  return (
    <>
      <NavbarComponent />
      <img src={Imagen5} className="imgContactPage"></img>
      <ContactForm />
      <Footer />
    </>
  );
};

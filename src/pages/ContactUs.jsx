import { ContactForm } from "../components/ContactForm"
import { Footer } from "../components/Footer"
import { NavbarComponent } from "../components/Navbar"
import "../styles/Main.css";


export const ContactUs = () => {
  return (
    <>
      <NavbarComponent />
      <div className="img"></div>
      <ContactForm />
      <Footer />
    </>
  )
}

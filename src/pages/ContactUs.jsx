import { ContactForm } from "../components/ContactForm"
import { Footer } from "../components/Footer"
import { NavbarComponent } from "../components/Navbar"
import { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext"
import "../styles/Main.css";


export const ContactUs = () => {
  const useLanguage = () => useContext(LanguageContext);

  const { t } = useLanguage();
  return (
    <>
      <NavbarComponent />
      <div className="img">
        <section className="imgText">
          <h1>{t.contact.heading}</h1>
          <p>{t.contact.description}</p>
        </section>
      </div>
      <ContactForm />
      <Footer />
    </>
  )
}

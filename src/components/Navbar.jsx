import { Form } from "react-bootstrap";
import "../styles/Navbar.css";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext, useEffect, useState } from "react";
import BurguerIcon from "../assets/icons/burguerIcon";
import { useNavigate } from "react-router-dom";
import logo from '../statics/logo1.png'

export const NavbarComponent = () => {
  const useLanguage = () => useContext(LanguageContext);
  const navigate = useNavigate();

  const { t, changeLanguage, language } = useLanguage();

  const [collapse, setCollapse] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setCollapse(null);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavigate = (location) => {
    navigate(location);
  };

  const handleLanguageToggle = () => {
    changeLanguage(language === "es" ? "en" : "es");
  };

  return (
    <nav>
      <div>
          <div className="logo" onClick={() => handleNavigate("/")}>
            <img className="img-logo" src={logo} alt="logo" />
          </div>
        <div>
          <div className="item" onClick={() => handleNavigate("/about-us")}>
            {t.navbar.aboutUs}
          </div>
          <div className="item" onClick={() => handleNavigate("/our-team")}>
            {t.navbar.trajectory}
          </div>
          <div className="item" onClick={() => handleNavigate("/projects")}>
            {t.navbar.projects}
          </div>
          <div className="item" onClick={() => handleNavigate("/contact")}>
            {t.navbar.contact}
          </div>
        </div>
        <div>
          <Form>
            <div className="lan-switch-labels">
              <label>{t.navbar.spanish}</label>
              <Form.Check
                type="switch"
                id="languageSwitch"
                label={""}
                checked={language === "en"}
                onChange={handleLanguageToggle}
              />
              <label>{t.navbar.english}</label>
            </div>
          </Form>
          <button onClick={() => setCollapse((prev) => !prev)}>
            <BurguerIcon />
          </button>
        </div>
      </div>
      <div
        className={`${
          collapse === null ? "d-none" : collapse ? "mm-open" : "mm-collapse"
        } flex-column align-items-center`}
      >
        <div
          className="item d-flex align-items-center"
          onClick={() => handleNavigate("/about-us")}
        >
          {t.navbar.aboutUs}
        </div>
        <div
          className="item d-flex align-items-center"
          onClick={() => handleNavigate("/our-team")}
        >
          {t.navbar.trajectory}
        </div>
        <div
          className="item d-flex align-items-center"
          onClick={() => handleNavigate("/projects")}
        >
          {t.navbar.projects}
        </div>
        <div
          className="item d-flex align-items-center"
          onClick={() => handleNavigate("/contact")}
        >
          {t.navbar.contact}
        </div>
      </div>
    </nav>
  );
};

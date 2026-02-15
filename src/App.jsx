import "./i18n/config.js";
import { useLanguage } from "./hooks/useLanguage.js";
import { Header } from "./Components/Header.jsx";
import { Footer } from "./Components/Footer.jsx";

function App() {
  const { t, changeLanguage } = useLanguage();
  return (
    <>
      <Header t={t} changeLanguage={changeLanguage} />

      <main>
        <section>
          <h2>{t("main.welcome")}</h2>
          <p>{t("main.description")}</p>
        </section>
        <section id="home">
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
        </section>
        <section id="projects">
          <h2>{t("main.projects_title")}</h2>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
          <p>contenido largooooooooooooooooooooooooooooooooooo</p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;

import "./i18n/config.js";
import { useLanguage } from "./hooks/useLanguage.js";
import { Header } from "./Components/Header.jsx";
import { Footer } from "./Components/Footer.jsx";
import { ProjectList } from "./Components/ProjectList.jsx";

function App() {
  const { t, changeLanguage } = useLanguage();
  return (
    <>
      <Header t={t} changeLanguage={changeLanguage} />

      <main>
        <section id="home">
          <h2>{t("main.welcome")}</h2>
          <p>{t("main.description")}</p>
        </section>

        <ProjectList t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}

export default App;

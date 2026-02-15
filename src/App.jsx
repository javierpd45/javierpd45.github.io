import "./i18n/config.js";
import { useLanguage } from "./hooks/useLanguage.js";
import { Header } from "./Components/Header.jsx";
import { Footer } from "./Components/Footer.jsx";
import { ProjectList } from "./Components/ProjectList.jsx";
import { Welcome } from "./Components/Welcome.jsx";

function App() {
  const { t, changeLanguage } = useLanguage();
  return (
    <>
      <Header t={t} changeLanguage={changeLanguage} />

      <main>
        <Welcome t={t} />

        <ProjectList t={t} />
      </main>

      <Footer t={t} />
    </>
  );
}

export default App;

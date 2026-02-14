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
        Main
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
        <p>{t("main.welcome")}</p>
      </main>
      <Footer />
    </>
  );
}

export default App;

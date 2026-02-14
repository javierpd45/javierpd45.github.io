import styles from "./Header.module.css";

export function Header({ t, changeLanguage }) {
  return (
    <header>
      <nav>
        <ul className={styles.navLinks}>
          <li className={styles.navLink}>
            <a href="#home">{t("header.home")}</a>
          </li>
          <li className={styles.navLink}>
            <a href="#about">{t("header.about")}</a>
          </li>

          <button onClick={() => changeLanguage("es")}>ES</button>
          <button onClick={() => changeLanguage("en")}>EN</button>
        </ul>
      </nav>
    </header>
  );
}

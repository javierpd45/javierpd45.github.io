import { useEffect, useState } from "react";
import styles from "./Header.module.css";

export function Header({ t, changeLanguage }) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const maxScrollY = 100; // Adjust this value based on when you want the header to be fully opaque

      const newOpacity = Math.min(currentScrollY / maxScrollY, 1);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={styles.navPill}
      style={{
        backgroundColor: `rgba(12, 21, 62, ${opacity})`,
        borderColor: `rgba(255, 255, 255, ${opacity * 0.25})`,
        boxShadow: `0 8px 20px rgba(0, 0, 0, ${opacity * 0.35})`,
      }}
    >
      <nav className={styles.navBar}>
        <a href="#home">{t("header.home")}</a>
        <a href="#about">{t("header.about")}</a>

        {/* radio buttons */}
        <label>
          <input
            type="radio"
            name="language"
            value="es"
            onChange={() => changeLanguage("es")}
          />
          ES
        </label>
        <label>
          <input
            type="radio"
            name="language"
            value="en"
            onChange={() => changeLanguage("en")}
          />
          EN
        </label>
      </nav>

      <span style={{ position: "fixed", top: 100, color: "white" }}>
        Opacidad real: {opacity.toFixed(2)}
      </span>
    </header>
  );
}

import styles from "./Welcome.module.css";

export function Welcome({ t }) {
  return (
    <section id="home">
      <h2>{t("main.welcome")}</h2>
      <p className={styles.description}>{t("main.description")}</p>
    </section>
  );
}

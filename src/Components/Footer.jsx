import styles from "./Footer.module.css";

export function Footer({ t }) {
  return (
    <>
      <footer className={styles.footer}>
        <small className={styles.footerText}>
          <a href="mailto:javierpd45@gmail.com">{t("footer.contact")}</a>
        </small>
      </footer>
    </>
  );
}

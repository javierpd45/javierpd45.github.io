import styles from "./Footer.module.css";

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <small className={styles.footerText}>
          &copy; 2026 Pedro Lora, casi todos los derechos reservados
        </small>
      </footer>
    </>
  );
}

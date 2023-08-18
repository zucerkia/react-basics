import Button from "../../atoms/Button";

import styles from "./Header.module.css";

const Header = () => {
  // Dos opciones para utilizar nombres de estilos compuestos
  // (nombre-compuesto)

  // 1.) hacer uso de la notación de corchetes
  // en lugar de acceder con styles.header-content (esto nos lanzaría un error) usamos: styles["header-content"]

  // 2.) Habilitar la conversion de los nombres compuestos en la configuración de vite para que los convierta en camelCase
  // Revisar archivo vite.config.js

  console.log(styles);
  return (
    <header className={styles.header}>
      {/* <span className={styles.headerContent}>logo</span> */}
      <span className={styles["header-content"]}>logo</span>
      <div className={styles.header__links}>
        <span className="header__about">
          <span className="about__name">about</span>
          <i className="about__icon">icono</i>
        </span>
        <span className="header__contact">Contact</span>
        <Button typeButton="secondary">Login</Button>
        <Button typeButton="secondary">Register</Button>
      </div>
    </header>
  );
};

export default Header;

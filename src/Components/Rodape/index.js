import styles from "./rodape.module.css";
import { ReactComponent as MarcaRegistrada } from "assets/marca_registrada.svg";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <MarcaRegistrada />
      Desenvolvido por Camilla Mendes.

      {/* <a href="https://github.com/camillamendess" target="_blank" rel="noreferrer">
        <img src={github} alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/camillamendess/" target="_blank" rel="noreferrer">
        <img src={linkedin} alt="LinkedIn" />
      </a>
      <a href="https://www.instagram.com/camillamendz/" target="_blank" rel="noreferrer">
        <img src={instagram} alt="Instagram" />
      </a>
      <a href="h" target="_blank">
        <img src={email} alt="Email" />
      </a> */}
    </footer>
  );
}

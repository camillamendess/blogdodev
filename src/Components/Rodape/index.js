import styles from "./rodape.module.css";
import github from "../../assets/github.png";
import insta from "../../assets/insta.png";
import linke from "../../assets/linke.png";
import email from "../../assets/email.png";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <a href="mailto:milla_mendes83@hotmail.com" target="_blank" rel="noreferrer">
        <img src={email} alt="Email" />
      </a>
      <a href="https://www.linkedin.com/in/camillamendess/" target="_blank" rel="noreferrer">
        <img src={linke} alt="LinkedIn" />
      </a>
      <a href="https://www.instagram.com/camillamendz/" target="_blank" rel="noreferrer">
        <img src={insta} alt="Instagram" />
      </a>
      <a href="https://github.com/camillamendess" target="_blank" rel="noreferrer">
        <img src={github} alt="GitHub" />
      </a>
    </footer>
  );
}

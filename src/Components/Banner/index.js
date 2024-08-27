import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, Dev!</h1>
        <p className={styles.paragrafo}>
          Eu sou Camilla Mendes, estudante de
          Ciência da Computação. Aqui compartilho vários
          conhecimentos sobre programação web, espero que aprenda algo novo :)
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          alt=""
          aria-hidden={true}
        />
        <img
          className={styles.minhaFoto}
          src={"https://github.com/camillamendess.png"}
          alt="eu"
        />
      </div>
    </div>
  );
};

export default Banner;

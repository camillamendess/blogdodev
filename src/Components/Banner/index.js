import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import fotoNote from "assets/foto.png";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Bem vindo(a), Dev!</h1>
        <p className={styles.paragrafo}>
          Neste blog, compartilho os temas que tenho estudado e aprofundado no mundo do desenvolvimento de software. Aqui, você encontrará artigos que vão desde práticas essenciais até tendências emergentes, tudo pensado para inspirar e ensinar. Explore e aprenda com o conteúdo que estou constantemente atualizando!
        </p>
      </div>
    </div>
  );
};

export default Banner;

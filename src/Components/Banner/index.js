import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Bem vindo(a), Dev!</h1>
        <p className={styles.paragrafo}>
          Neste blog, você irá encontrar artigos sobre o universo do desenvolvimento de software. Fique à vontade para explorar e aprender com os conteúdos disponíveis!
        </p>
      </div>
    </div>
  );
};

export default Banner;

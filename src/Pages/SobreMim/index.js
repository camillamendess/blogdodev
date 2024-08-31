import styles from "./sobreMim.module.css";

const SobreMim = () => {
  return (
    <div className={styles.sobreMim}>
      <h3 className={styles.titulo}>Olá, eu sou Camilla!</h3>
      <img
        src={"https://github.com/camillamendess.png"}
        alt="EU"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, nobis
        cupiditate libero nemo assumenda rem? Temporibus, vel! Autem, excepturi
        voluptates?
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, nobis
        cupiditate libero nemo assumenda rem? Temporibus, vel! Autem, excepturi
        voluptates?
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, nobis
        cupiditate libero nemo assumenda rem?
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, nobis
        cupiditate libero nemo assumenda rem? Temporibus, vel! Autem, excepturi
        voluptates?
      </p>
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, nobis
        cupiditate libero nemo assumenda rem?
      </p>
    </div>
  );
};

export default SobreMim;

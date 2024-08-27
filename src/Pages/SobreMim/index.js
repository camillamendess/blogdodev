import PostModelo from "Components/PostModelo";
// import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./sobreMim.module.css";

const SobreMim = () => {
  return (
    <PostModelo>
      <h3 className={styles.subtitulo}>Olá, eu sou Camilla!</h3>

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
    </PostModelo>
  );
};

export default SobreMim;

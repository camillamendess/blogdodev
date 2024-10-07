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
        Me chamo Camilla, sou desenvolvedora full stack e apaixonada por desenvolvimento web. Estou constantemente em busca de novos aprendizados para aprimorar minhas habilidades e crescer profissionalmente.
      </p>
      <p className={styles.paragrafo}>
        Sou natural da Bahia e estudo Ciência da Computação na Universidade Estadual do Sudoeste da Bahia (UESB), onde fui introduzida ao vasto universo da programação.
      </p>
      <p className={styles.paragrafo}>
        Na faculdade, dei meus primeiros passos com lógica de programação em C++ e aprofundei meus conhecimentos em Programação Orientada a Objetos (POO) e estruturas de dados com Java.
      </p>
      <p className={styles.paragrafo}>
        Atualmente, estou focada em desenvolvimento web, utilizando tecnologias como Node.js, React, HTML, CSS, TypeScript e outros.
      </p>
      <p className={styles.paragrafo}>
        Esse site foi criado como uma forma de praticar minhas habilidades em React e também para compartilhar conteúdos relevantes com a comunidade de desenvolvedores.
      </p>
    </div>
  );
};

export default SobreMim;

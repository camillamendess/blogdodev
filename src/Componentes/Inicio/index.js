import Post from "Componentes/Post";
import Banner from "../Banner";
import styles from "./Inicio.module.css";
import posts from "json/posts.json";

const Inicio = () => {
  return (
    <main>
      <Banner />
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post}></Post>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Inicio;

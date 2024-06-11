import PostCard from "Components/PostCard";
import styles from "./Inicio.module.css";
import posts from "json/posts.json";

const Inicio = () => {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post}></PostCard>
        </li>
      ))}
    </ul>
  );
};

export default Inicio;

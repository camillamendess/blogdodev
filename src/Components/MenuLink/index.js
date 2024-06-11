import styles from "./MenuLink.module.css";
import { Link, useLocation } from "react-router-dom";

export default function MenuLink({ children, to }) {
  const Localizacao = useLocation();
  return (
    <Link
      className={`
        ${styles.link}
        ${Localizacao.pathname === to ? styles.linkDestacado : ""}
        `}
      to={to}
    >
      {children}
    </Link>
  );
}

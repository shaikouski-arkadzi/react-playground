import styles from "../styles/style.module.css";

export default function Place({ item }) {
  return (
    <article className={styles.place}>
      <div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    </article>
  );
}

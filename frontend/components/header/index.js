import styles from "./Header.module.css";

export default function Headers() {
  return (
    <header className={styles.header}>
      <div className={styles.headerName}>GlueFood</div>
    </header>
  );
}
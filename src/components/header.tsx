import styles from "../index.module.scss";
function Header(headerText: String) {
  return (
    <div className={styles.header}>
      <div className={styles.headerText}>{headerText}</div>
    </div>
  );
}

export default Header;

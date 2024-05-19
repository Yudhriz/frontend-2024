import styles from "./Alert.module.css";

function Alert(props) {
  const { children } = props;
  return <div className={styles.form__error}>{children}</div>;
}

export default Alert;

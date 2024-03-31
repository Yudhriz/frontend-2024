import styles from "./Form.module.css";

function Form() {
  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src='https://picsum.photos/536/354'
            alt='placeholder'
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movies</h2>
          <form action='' className={styles.form__container}>
            <label className={styles.form__label} htmlFor='title'>
              Title
            </label>
            <input className={styles.form__input} type='text' />
            <label className={styles.form__label} htmlFor='year'>
              Year
            </label>
            <input className={styles.form__input} type='text' />
            <input
              className={styles.form__button}
              type='button'
              value='Submit'
            />
          </form>
        </div>
      </section>
    </div>
  );
}
export default Form;

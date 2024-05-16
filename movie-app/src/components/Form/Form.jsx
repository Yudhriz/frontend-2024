import { useState } from "react";
import styles from "./Form.module.css";

function Form(props) {
  const { movies, setMovies } = props;

  // Membuat state title
  const { title, setTitle } = useState("");

  const { date, setDate } = useState("");

  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);

  function handleTitle(event) {
    setTitle(event.target.value);
  }

  function handleDate(event) {
    setDate(event.target.value);
  }

  // Handle Submit
  function handleSubmit(event) {
    event.preventDefault();

    if (title === "") {
      setIsTitleError(true);
    } else if (date === "") {
      setIsDateError(true);
    } else {
      const movie = {
        id: nanoid(),
        title: title,
        year: date,
        type: "Movie",
        poster: "https://picsum.photos/300/400",
      };

      setMovies([...movies, movie]);

      setIsDateError(false);
      setIsTitleError(false);
    }
  }

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
          <form onSubmit={handleSubmit} className={styles.form__container}>
            <label className={styles.form__label} htmlFor='title'>
              Title
            </label>
            <input
              className={styles.form__input}
              type='text'
              value={title}
              onChange={handleTitle}
            />
            {isTitleError && <p>Title Wajib Diisi</p>}
            <label className={styles.form__label} htmlFor='year'>
              Year
            </label>
            <input
              className={styles.form__input}
              type='number'
              value={date}
              onChange={handleDate}
            />
            {isDateError && <p>Date Wajib Diisi</p>}
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

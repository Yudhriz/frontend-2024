import { useState } from "react";
import styles from "./Form.module.css";
import { nanoid } from "nanoid";
import Alert from "../Alert/Alert";

function Form(props) {
  const { movies, setMovies } = props;

  // Membuat state untuk title, date, type, dan poster
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [poster, setPoster] = useState("");
  const [type, setType] = useState("");

  // Membuat state untuk error
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isPosterError, setIsPosterError] = useState(false);
  const [isTypeError, setIsTypeError] = useState(false);

  function handleTitle(event) {
    setTitle(event.target.value);
  }

  function handleDate(event) {
    setDate(event.target.value);
  }

  function handlePoster(event) {
    setPoster(event.target.value);
  }

  function handleType(event) {
    setType(event.target.value);
  }

  // Handle Submit
  function handleSubmit(event) {
    event.preventDefault();

    if (title === "") {
      setIsTitleError(true);
    } else if (date === "") {
      setIsDateError(true);
    } else if (poster === "") {
      setIsPosterError(true);
    } else if (type === "") {
      setIsTypeError(true);
    } else {
      const movie = {
        id: nanoid(),
        title: title,
        year: date,
        type: type,
        poster: poster,
      };

      setMovies([...movies, movie]);

      // Reset Form
      setTitle("");
      setDate("");
      setPoster("");

      setIsDateError(false);
      setIsTitleError(false);
      setIsPosterError(false);
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
            {isTitleError && <Alert>Title Wajib Diisi</Alert>}
            <label className={styles.form__label} htmlFor='year'>
              Year
            </label>
            <input
              className={styles.form__input}
              type='number'
              value={date}
              onChange={handleDate}
            />
            {isDateError && <Alert>Date Wajib Diisi</Alert>}
            <label className={styles.form__label} htmlFor='type'>
              Type
            </label>
            <select
              className={styles.form__input}
              name='type'
              id='type'
              value={type}
              onChange={handleType}
            >
              <option value='' hidden>Select Type</option>
              <option value='action'>Action</option>
              <option value='comedy'>Comedy</option>
              <option value='drama'>Drama</option>
              <option value='horror'>Horror</option>
              <option value='thriller'>Thriller</option>
            </select>
            {isTypeError && <Alert>Type Wajib Diisi</Alert>}
            <label className={styles.form__label} htmlFor='poster'>
              Poster
            </label>
            <input
              className={styles.form__input}
              type='Text'
              value={poster}
              onChange={handlePoster}
            />
            {isPosterError && <Alert>Poster Wajib Diisi</Alert>}
            <input
              className={styles.form__button}
              type='submit'
              value='Submit'
            />
          </form>
        </div>
      </section>
    </div>
  );
}
export default Form;

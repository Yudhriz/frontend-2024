import { useState } from "react";
import styles from "./Form.module.css";
import { nanoid } from "nanoid";
import Alert from "../Alert/Alert";
import Button from "../ui/Button/Button";
import Image from "../ui/Image/Image";
import { useNavigate } from "react-router-dom";

function Form(props) {
  // Buat navigation dari useNavigate
  const navigation = useNavigate();

  // Membuat state untuk title, date, type, dan poster (sudah direfactor)
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    type: "",
    poster: "",
  });

  // Membuat state untuk error (sudah direfactor)
  const [formError, setFormError] = useState({
    title: false,
    date: false,
    type: false,
    poster: false,
  });

  // Membuat function untuk menghandle perubahan value pada form (sudah direfactor)
  function handleChange(event) {
    // destructuring name dan value dari event.target
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormError({
      ...formError,
      [name]: false,
    });
  }

  // Destructuring formData dan formError
  const { title, date, type, poster } = formData;
  const {
    title: isTitleError,
    date: isDateError,
    type: isTypeError,
    poster: isPosterError,
  } = formError;

  // Membuat function untuk validasi form (sudah direfactor)
  function validation() {
    // Membuat object errors
    const errors = {
      title: title === "",
      date: date === "",
      type: type === "",
      poster: poster === "",
    };
    // Set formError dengan errors
    setFormError(errors);

    // Mengembalikan nilai boolean
    return !Object.values(errors).includes(true);
  }

  function addMovie() {
    const movie = {
      id: nanoid(),
      title: title,
      year: date,
      type: type,
      poster: poster,
    };

    setMovies([...movies, movie]);

    // Reset Form
    setFormData({
      title: "",
      date: "",
      type: "",
      poster: "",
    });

    // Redirect ke halaman home
    navigation("/");
  }

  // Handle Submit (sudah direfactor)
  function handleSubmit(event) {
    event.preventDefault();

    validation() && addMovie();
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <Image
            className={styles.form__image}
            borderRadius='25px'
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
              name='title'
              value={title}
              onChange={handleChange}
            />
            {isTitleError && <Alert>Title Wajib Diisi</Alert>}
            <label className={styles.form__label} htmlFor='year'>
              Year
            </label>
            <input
              className={styles.form__input}
              type='number'
              name='date'
              value={date}
              onChange={handleChange}
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
              onChange={handleChange}
            >
              <option value='' hidden>
                Select Type
              </option>
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
              type='text'
              name='poster'
              value={poster}
              onChange={handleChange}
            />
            {isPosterError && <Alert>Poster Wajib Diisi</Alert>}
            <Button variant='primary' full type='submit'>
              Submit
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Form;

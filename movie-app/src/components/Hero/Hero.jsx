import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

function Hero() {
  const [movie, setMovie] = useState("");

  // Fetch data from API
  useEffect(() => {
    async function fetchData() {
      const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
      const response = await fetch(url);
      const data = await response.json();

      setMovie(data);
    }
    fetchData();
  });

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>{movie.Title}</h2>
          <h3 className={styles.hero__genre}>
            Genre: <span>{movie.Genre}</span>
          </h3>
          <p className={styles.hero__description}>{movie.Plot}</p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        <div className={styles.hero__right}>
          <img
            className={styles.hero__image}
            src={movie.Poster}
            alt='placeholder'
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;

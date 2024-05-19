import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
// import data from "../../utils/constants/data";
// import { useState } from "react";
// import { nanoid } from "nanoid";

function Movies(props) {
  // Membuat Variable Movies
  const { movies, setMovies } = props;

  // function handleClick() {
  //   const newMovie = {
  //     id: nanoid(),
  //     title: "Siksa Kubur",
  //     year: "2024",
  //     type: "Movie",
  //     poster:
  //       "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
  //   };

  //   setMovies([...movies, newMovie]);
  // }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movie</h2>
        <div className={styles.movie__container}>
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
        {/* <button onClick={handleClick}>Add Movie</button> */}
      </section>
    </div>
  );
}

export default Movies;

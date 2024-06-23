import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINT from "../../utils/constants/endpoint";

function PopulerMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchPopulerMovies() {
      const response = await axios(ENDPOINT.POPULER);

      setMovies(response.data.results);
    }
    fetchPopulerMovies();
  }, []);

  return (
    <>
      <Hero />
      <Movies movies={movies} title='Populer Movie' />
    </>
  );
}

export default PopulerMovie;

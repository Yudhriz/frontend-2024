import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINT from "../../utils/constants/endpoint";

function TopRateMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTopRateMovies() {
      const response = await axios(ENDPOINT.TOP_RATED);

      setMovies(response.data.results);
    }
    fetchTopRateMovies();
  }, []);

  return (
    <>
      <Hero />
      <Movies movies={movies} title='Top Rate Movie' />
    </>
  );
}

export default TopRateMovie;

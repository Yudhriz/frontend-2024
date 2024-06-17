import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function TopRateMovie() {
  const [movies, setMovies] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchTopRateMovies() {
      const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

      const response = await axios(url);

      setMovies(response.data.results);
    }
    fetchTopRateMovies();
  }, []);

  return (
    <>
      <Hero />
      <Movies movies={movies} title="Top Rate Movie" />
    </>
  );
}

export default TopRateMovie;

import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function PopulerMovie() {
  const [movies, setMovies] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchPopulerMovies() {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

      const response = await axios(url);

      setMovies(response.data.results);
    }
    fetchPopulerMovies();
  }, []);
  
  return (
    <>
      <Hero />
      <Movies movies={movies} title="Populer Movie"/>
    </>
  );
}

export default PopulerMovie;

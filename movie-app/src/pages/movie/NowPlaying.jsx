import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function NowPlayingMovie() {
  const [movies, setMovies] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchNowPlayingMovies() {
      const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

      const response = await axios(url);

      setMovies(response.data.results);
    }
    fetchNowPlayingMovies();
  }, []);
  
  return (
    <>
      <Hero />
      <Movies movies={movies} title="Now Playing Movie" />
    </>
  );
}

export default NowPlayingMovie;

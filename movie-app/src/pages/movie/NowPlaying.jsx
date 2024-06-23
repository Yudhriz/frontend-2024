import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINT from "../../utils/constants/endpoint";

function NowPlayingMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchNowPlayingMovies() {
      const response = await axios(ENDPOINT.NOW_PLAYING);

      setMovies(response.data.results);
    }
    fetchNowPlayingMovies();
  }, []);

  return (
    <>
      <Hero />
      <Movies movies={movies} title='Now Playing Movie' />
    </>
  );
}

export default NowPlayingMovie;

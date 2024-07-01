import { useEffect, useContext } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINT from "../../utils/constants/endpoint";
import MoviesContext from "../../context/MoviesContext";

function NowPlayingMovie() {
  const { setMovies } = useContext(MoviesContext);

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
      <Movies title='Now Playing Movie' />
    </>
  );
}

export default NowPlayingMovie;

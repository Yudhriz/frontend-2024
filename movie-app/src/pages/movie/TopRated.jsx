import { useEffect, useContext } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINT from "../../utils/constants/endpoint";
import MoviesContext from "../../context/MoviesContext";

function TopRateMovie() {
  const { setMovies } = useContext(MoviesContext);

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
      <Movies title='Top Rate Movie' />
    </>
  );
}

export default TopRateMovie;

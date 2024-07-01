import { useEffect, useContext } from "react";
import axios from "axios";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINT from "../../utils/constants/endpoint";
import MoviesContext from "../../context/MoviesContext";

function PopulerMovie() {
  const { setMovies } = useContext(MoviesContext);

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
      <Movies title='Populer Movie' />
    </>
  );
}

export default PopulerMovie;

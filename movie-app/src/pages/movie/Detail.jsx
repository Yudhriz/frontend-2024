import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailMovie from "../../components/DetailMovie/DetailMovie";
import Movies from "../../components/Movies/Movies";
import ENDPOINT from "../../utils/constants/endpoint";

function Detail() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getRecommendationMovies() {
      const response = await axios(ENDPOINT.RECOMENNDATIONS(id));
      setMovies(response.data.results);
    }

    getRecommendationMovies();
  }, [id]);

  return (
    <>
      <DetailMovie />
      <Movies movies={movies} title='Recommendations Movie' />
    </>
  );
}

export default Detail;

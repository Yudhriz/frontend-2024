import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import StyledDetailMovie from "./Detail.Movie.styled";
import Button from "../ui/Button/Button";
import ENDPOINT from "../../utils/constants/endpoint";

function DetailMovie() {
  const { id } = useParams();

  const [movie, setMovie] = useState("");

  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer =
    movie && movie.videos.results.length > 0
      ? `https://youtube.com/watch?v=${movie.videos.results[0].key}`
      : "?";

  useEffect(() => {
    async function getDetailMovie() {
      const response = await axios(ENDPOINT.DETAIL(id));
      setMovie(response.data);
    }

    getDetailMovie();
  }, [id]);

  return (
    <>
      <StyledDetailMovie>
        <div className='poster'>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className='info'>
          <h2>{movie.title}</h2>
          <h3>{genres}</h3>
          <p>{movie.overview}</p>
          <Button as='a' href={trailer}>
            Watch
          </Button>
        </div>
      </StyledDetailMovie>
    </>
  );
}

export default DetailMovie;

import Heading from "../ui/Heading/Heading";
import Image from "../ui/Image/Image";
import StyledMovie from "./Movie.styled";

function Movie(props) {
  const { movie } = props;

  const tmdbImage = `https://image.tmdb.org/t/p/w300/${movie.poster_path}}`;
  const year = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : movie.year;

  return (
    <StyledMovie>
      <Image src={movie.poster || tmdbImage} alt={movie.title} />
      <Heading as='h3'>{movie.title}</Heading>
      <p>{year}</p>
    </StyledMovie>
  );
}

export default Movie;

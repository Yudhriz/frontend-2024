import Heading from "../ui/Heading/Heading";
import Image from "../ui/Image/Image";
import StyledMovie from "./Movie.styled";

function Movie(props) {
  const { movie } = props;

  return (
    <StyledMovie>
      <Image src={movie.poster} alt={movie.title} />
      <Heading as='h3'>{movie.title}</Heading>
      <p>{movie.year}</p>
    </StyledMovie>
  );
}

export default Movie;

import Movie from "../Movie/Movie";
import Heading from "../ui/Heading/Heading";
import StyledMovies from "./Movies.styled";
import { useContext } from "react";
import MoviesContext from "../../context/MoviesContext";

function Movies(props) {
  const { title = "Latest Movies" } = props;

  const { movies } = useContext(MoviesContext);

  return (
    <StyledMovies>
      <section>
        <Heading as='h2'>{title}</Heading>
        <div className='movie__container'>
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
      </section>
    </StyledMovies>
  );
}

export default Movies;

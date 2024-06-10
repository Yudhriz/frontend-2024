import Movie from "../Movie/Movie";
import Heading from "../ui/Heading/Heading";
import StyledMovies from "./Movies.styled";

function Movies(props) {
  // Membuat Variable Movies
  const { movies, setMovies } = props;

  return (
    <StyledMovies>
      <section>
        <Heading as='h2'>Latest Movie</Heading>
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

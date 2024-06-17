import { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import StyledHero from "./Hero.styled";
import Heading from "../ui/Heading/Heading";
import Image from "../ui/Image/Image";
import axios from "axios";

function Hero() {
  const [movie, setMovie] = useState("");
  const API_KEY = import.meta.env.VITE_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const idTrailer = movie && movie.videos.results[0].key;

  // Fetch data from API
  useEffect(() => {
    // Fetch trending movies
    async function fetchTrendingMovies() {
      const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

      const response = await axios(url);
      const firstMovie = response.data.results[0];
      return firstMovie;
    }

    fetchTrendingMovies();

    // Fetch detail movie
    async function fetchDetailMovie() {
      const trendingMovie = await fetchTrendingMovies();
      const id = trendingMovie.id;

      const params = `?api_key=${API_KEY}&append_to_response=videos`;
      const url = `https://api.themoviedb.org/3/movie/${id}${params}`;
      const response = await axios(url);

      setMovie(response.data);
    }

    fetchDetailMovie();
  }, []);

  return (
    <StyledHero>
      <section>
        <div className='hero__left'>
          <Heading as='h2'>{movie.title}</Heading>
          <Heading as='h3'>
            Genre: <span>{genres}</span>
          </Heading>
          <p>{movie.overview}</p>
          <Button
            variant='primary'
            as='a'
            href={`https://youtube.com/watch?v=${idTrailer}`}
            target='_blank'
          >
            Watch Trailer
          </Button>
        </div>
        <div className='hero__right'>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt='placeholder'
          />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;

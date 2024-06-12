import { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import StyledHero from "./Hero.styled";
import Heading from "../ui/Heading/Heading";
import Image from "../ui/Image/Image";

function Hero() {
  const [movie, setMovie] = useState("");

  // Fetch data from API
  useEffect(() => {
    async function fetchData() {
      const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
      const response = await fetch(url);
      const data = await response.json();

      setMovie(data);
    }
    fetchData();
  }, []); // Added empty dependency array to run only once

  return (
    <StyledHero>
      <section>
        <div className='hero__left'>
          <Heading as='h2'>{movie.Title}</Heading>
          <Heading as='h3'>
            Genre: <span>{movie.Genre}</span>
          </Heading>
          <p>{movie.Plot}</p>
          <Button variant='primary'>Watch</Button>
        </div>
        <div className='hero__right'>
          <Image src={movie.Poster} alt='placeholder' />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;

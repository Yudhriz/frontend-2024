import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Form from "../components/Form/Form";
import data from "../utils/constants/data";
import { useState } from "react";

function Home() {
  const [movies, setMovies] = useState(data);

  return (
    <div>
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
      <Form movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default Home;

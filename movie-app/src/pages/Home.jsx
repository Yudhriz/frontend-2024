import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Form from "../components/Form/Form";
import data from "../utils/constants/data";
import { useState } from "react";

function Home() {
  const [movies, setMovies] = useState(data);

  return (
    <div>
      <Navbar />
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
      <Form movies={movies} setMovies={setMovies} />
      <Footer />
    </div>
  );
}

export default Home;

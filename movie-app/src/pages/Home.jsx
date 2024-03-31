import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Form from "../components/Form/Form";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Movies />
      <Form />
      <Footer />
    </div>
  );
}

export default Home;

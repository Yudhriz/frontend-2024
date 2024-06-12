import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import CreateMovie from "./pages/movie/Create";
import PopulerMovie from "./pages/movie/Populer";
import NowPlayingMovie from "./pages/movie/NowPlaying";
import TopRateMovie from "./pages/movie/TopRated";
import Layout from "./Layout/Layout";
<<<<<<< HEAD
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme.jsx";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
=======
>>>>>>> 053d31c3f2f59f7e5da3adebc783fb970b97ba64

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/movie/create' element={<CreateMovie />}></Route>
          <Route path='/movie/populer' element={<PopulerMovie />}></Route>
          <Route path='/movie/now' element={<NowPlayingMovie />}></Route>
          <Route path='/movie/top' element={<TopRateMovie />}></Route>
        </Routes>
      </Layout>
    </div>
  );
};

export default App;

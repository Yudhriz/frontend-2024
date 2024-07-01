import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import CreateMovie from "./pages/movie/Create";
import PopulerMovie from "./pages/movie/Populer";
import NowPlayingMovie from "./pages/movie/NowPlaying";
import TopRateMovie from "./pages/movie/TopRated";
import Layout from "./Layout/Layout";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import Detail from "./pages/movie/Detail";
import { useState } from "react";
import data from "./utils/constants/data";
import MoviesContext from "./context/MoviesContext";

const App = () => {
  const [movies, setMovies] = useState(data);

  const contextValue = {
    movies,
    setMovies,
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <MoviesContext.Provider value={contextValue}>
          <GlobalStyle />
          <Layout>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/movie/create' element={<CreateMovie />}></Route>
              <Route path='/movie/populer' element={<PopulerMovie />}></Route>
              <Route path='/movie/now' element={<NowPlayingMovie />}></Route>
              <Route path='/movie/top' element={<TopRateMovie />}></Route>
              <Route path='/movie/:id' element={<Detail />}></Route>
            </Routes>
          </Layout>
        </MoviesContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default App;

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

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/movie/create' element={<CreateMovie />}></Route>
            <Route path='/movie/populer' element={<PopulerMovie />}></Route>
            <Route path='/movie/now' element={<NowPlayingMovie />}></Route>
            <Route path='/movie/top' element={<TopRateMovie />}></Route>
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;

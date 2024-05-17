import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import CreateMovie from "./pages/movie/Create";
import PopulerMovie from "./pages/movie/Populer";
import NowPlayingMovie from "./pages/movie/NowPlaying";
import TopRateMovie from "./pages/movie/TopRated";
import Layout from "./Layout/Layout";

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

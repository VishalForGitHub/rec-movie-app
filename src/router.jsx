import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import TopRated from './pages/TopRated';
import Upcoming from './pages/Upcoming';
import MovieDetail from './pages/MovieDetail';
// import SearchResults from './pages/SearchResults';

const AppRouter = () => {
  return (
    <Router>
        <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        {/* <Route path="/search/:query" element={<SearchResults />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;

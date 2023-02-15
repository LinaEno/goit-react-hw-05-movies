import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import MoviesDetails from './Pages/MoviesDetails';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          {/* <Route path="*" element={<div>404</div>} /> */}
        </Routes>
      </Layout>
    </div>
  );
};

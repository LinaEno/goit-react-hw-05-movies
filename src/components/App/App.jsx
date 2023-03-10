import { Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import Layout from '../Layout/Layout';
import { Box } from './Box.styled';

const Home = lazy(() => import('pages/HomePage'));
const Movies = lazy(() => import('pages/Films'));
const MoviesDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const PageNotFound404 = lazy(() => import('pages/Page404'));

export const App = () => {
  return (
    <Box>
      <Layout>
        <Suspense fallback={<InfinitySpin width="200" color="#4fa94d" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MoviesDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<PageNotFound404 />} />
          </Routes>
        </Suspense>
      </Layout>
    </Box>
  );
};

//

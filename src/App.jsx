import React from 'react';
import HomePage from 'pages/HomePage/HomePage';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId/*" element={<MovieDetailsPage />} />
      </Routes>
    </Layout>
  );
}

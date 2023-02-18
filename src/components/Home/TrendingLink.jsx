import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MovieItem } from './Home.styled';

const MovieLink = ({ name, id }) => {
  const location = useLocation();
  return (
    <MovieItem>
      <NavLink to={`/movies/${id}`} state={{ from: location }}>
        {name}
      </NavLink>
    </MovieItem>
  );
};

export default MovieLink;

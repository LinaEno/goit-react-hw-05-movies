import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const TrendingLink = ({ name, id }) => {
  const location = useLocation();
  return (
    <li>
      <NavLink to={`/movies/${id}`} state={{ from: location }}>
        {name}
      </NavLink>
    </li>
  );
};

export default TrendingLink;

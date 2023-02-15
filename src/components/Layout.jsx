import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/"> Home</NavLink>
          <NavLink to="movies"> Movies</NavLink>
        </nav>
      </header>
      {children}
    </div>
  );
};

export default Layout;

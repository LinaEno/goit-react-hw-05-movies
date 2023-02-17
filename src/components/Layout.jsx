import React from 'react';
import { Header, Menu } from './header.styled';

const Layout = ({ children }) => {
  return (
    <div>
      <Header>
        <nav>
          <Menu to="/"> Home</Menu>
          <Menu to="movies"> Movies</Menu>
        </nav>
      </Header>
      {children}
    </div>
  );
};

export default Layout;

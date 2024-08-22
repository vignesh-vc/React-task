import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/company-info">Company Info</Link></li>
      </ul>
    </nav>
  );
};

export default MenuBar;

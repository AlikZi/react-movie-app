import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <div className="logo-box container">
    <Link to="/"><img className="logo-image" alt="The Movie DB" src="/images/tmdb.svg" /></Link>
    </div>
  </div>
);

export default Header;
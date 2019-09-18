import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="container">
    <h1>404 - NOT FOUND</h1>
    <h2><Link to="/">Go home</Link></h2>
  </div>
);

export default NotFoundPage;
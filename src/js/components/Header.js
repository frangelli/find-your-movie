import React from 'react';
import { Link } from 'react-router-dom';

require('./Header.scss');

export default (props) => {
  console.log(window.location);
  return (
    <header className="main-header">
      {
        window.location.hash.indexOf('details') > -1 &&
        <Link to="/">Go Back to search</Link>
      }
      <h1 className="brand">Find your movie!</h1>
    </header>
  );
};

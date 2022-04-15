import React from 'react';
import spinner from '../assets/spinner.gif';

function Spinner(props) {
  return (
    <img
      src={spinner}
      alt="loading..."
      style={{ width: '100px', margin: 'auto', display: 'block' }}
    />
  );
}

Spinner.propTypes = {};

export default Spinner;

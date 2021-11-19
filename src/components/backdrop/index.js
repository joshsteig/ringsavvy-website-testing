import React from 'react';
import PropTypes from 'prop-types';

const Backdrop = ({ show, clicked }) =>
  show ? <div className='backdrop' onClick={clicked} /> : null;

export default Backdrop;

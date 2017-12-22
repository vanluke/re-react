import React from 'react';
import PropTypes from 'prop-types';

const Root = ({children}) => (
  <main>
    {children}
  </main>);

Root.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Root;

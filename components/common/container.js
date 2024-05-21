import React from 'react';

const Container = ({ id = '', className = '', children }) => {
  return (
    <div id={id} className={`container ${className}`}>
      {children}
    </div>
  );
};

export default Container;

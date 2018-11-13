import React from 'react';

const MunroDetails = ({munro}) => {

  const {name, meaning, height, region} = munro;

  return (
    <>
      <h2>{name}, {height}m</h2>
      <h3 className="italics">{meaning}</h3>
      <h4>{region}</h4>
    </>
  );

};

export default MunroDetails;

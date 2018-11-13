import React from 'react';

const MunroDetails = ({munro}) => {
  if (!munro) return <h3>Select a Munro from the map</h3>

  const {name, meaning, height, region} = munro;
  return (
    <>
      <h2>Name: {name}</h2>
      <h3>Meaning: {meaning}</h3>
      <h3>Height: {height}m</h3>
      <h3>Region: {region}</h3>
    </>
  );
};

export default MunroDetails;

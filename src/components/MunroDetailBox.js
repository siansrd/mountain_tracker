import React from 'react';
import MunroDetails from './MunroDetails';
import Comment from './Comment';

const MunroDetailBox = (props) => {
  return (
    <>
      <MunroDetails munro={props.munro} />
      <Comment />
    </>
  );
};

export default MunroDetailBox;

import React from 'react';
import MunroDetails from './MunroDetails';
import Comment from './Comment';

const MunroDetailBox = ({munro}) => {

  if (!munro) return null;

  const comments = munro.comments.map(comment => (
    <Comment key={comment.smcid} comment={comment}/>
  ))

  return (
    <>
      <h2>Munro Details</h2>
      <MunroDetails munro={munro} />
      <h2>Comments</h2>
      {comments}
    </>
  );
};

export default MunroDetailBox;

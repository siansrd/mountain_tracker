import React from 'react';
import MunroDetails from './MunroDetails.js';
import Comment from './Comment.js';

const MunroDetailBox = ({munro}) => {

  if (!munro) return <h3>Select a Munro from the map</h3>

  let comments = 'No comments';

  if (munro.comments.length > 0) {
    comments = munro.comments.map(comment => (
      <Comment key={comment.smcid} comment={comment}/>
    ));
  }

  return (
    <>
      <MunroDetails munro={munro} />
      <div className='comments'>
        <h4>Comments</h4>
        {comments}
      </div>
    </>
  );

};

export default MunroDetailBox;

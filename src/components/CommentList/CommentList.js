import React from 'react';
import CommentItem from './../CommentItem/CommentItem';

const CommentList = ({lists, viewid}) => {

  const commentItem = lists.map(
    list => (
      <CommentItem
        text={list.comment}
        viewid={viewid}
      >
      </CommentItem>
    )
  )

  return(
    <div>
      {commentItem}
    </div>
  );
}

export default CommentList;

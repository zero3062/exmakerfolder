import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './CommentList.scss';
import classNames from 'classnames/bind';
import CommentItem from './../CommentItem/CommentItem';

const cx = classNames.bind(styles);

const CommentList = ({lists, viewid}) => {

  const commentItem = lists.map(
    list => (
      <CommentItem
        key={list.id}
        text={list.text}
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

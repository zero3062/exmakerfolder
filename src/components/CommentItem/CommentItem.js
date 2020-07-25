import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './CommentItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CommentItem = ({text, viewid}) => {

  return(
    <div className={cx('commentitem-back')}>
      <div className={cx('commentitem-icon')}></div>
      <div className={cx('commentitem-user')}>
        <div className={cx('commentitem-username')}>{viewid}</div>
        <div className={cx('commentitem-text')}>{text}</div>
      </div>
    </div>
  );
}

export default CommentItem;

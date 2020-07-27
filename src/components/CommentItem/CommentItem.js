import React, { useState } from 'react';
import styles from './CommentItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CommentItem = ({text, viewid}) => {

  const [view, setView] = useState(false);

  const hide = {
    fontSize: "13px",
    width: "360px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "normal",
    wordWrap: "break-word",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
  };

  const visible = {
    fontSize: "13px",
    width: "360px",
  };

  return(
    <div className={cx('commentitem-back')}>
      <div className={cx('commentitem-icon')}></div>
      <div className={cx('commentitem-user')}>
        <div className={cx('commentitem-username')}>{viewid}</div>
        { view ?
          <div style={visible} className={cx('commentitem-text')}>{text}</div>
          :
          <div style={hide} className={cx('commentitem-text')}>{text}</div>
        }
        { text.length > 59 &&
          <div className={cx('commentitem-detail')} onClick={e => setView(!view)}>{view ? "간략히" : "자세히"}</div>
        }
      </div>
    </div>
  );
}

export default CommentItem;

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './InPageList.scss';
import classNames from 'classnames/bind';
import CommentPage from './../CommentPage/CommentPage';
import RatingPage from './../RatingPage/RatingPage';

const cx = classNames.bind(styles);

const InPageList = ({ onCheck, handleStar, file, viewid, viewpin, viewitem, commentarr }) => {
  return (
    <div>
      <div className={cx('img-insert')}>
        <embed className={cx('choose-pdf')} src={file} height="550" width="440"/>
      </div>
      <div>
        <CommentPage viewid={viewid} viewpin={viewpin} viewitem={viewitem} commentarr={commentarr}/>
      </div>
      <div>
        <RatingPage handleStar={handleStar}/>
      </div>
    </div>
  );
}

export default InPageList;

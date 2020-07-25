import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './InPageItem.scss';
import classNames from 'classnames/bind';
import AnswerList from './../AnswerList/AnswerList';

const cx = classNames.bind(styles);

const InPageItem = ({value, children, num, onCheck, subtext}) => {
  return(
    <div className={cx('inpageitem-back')}>
      <div className={cx('inpageitem-quiz')}>{children}</div>
      <div className={cx('inpageitem-text')}>{subtext}</div>
    </div>
  );
}

export default InPageItem

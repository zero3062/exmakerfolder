import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './ViewList.scss';
import classNames from 'classnames/bind';
import ViewItem from './../ViewItem/ViewItem';

const cx = classNames.bind(styles);

function ViewList({viewpin, viewid, checkAdd, lists}) {

  const viewItem = lists.map(
    list => (
      <ViewItem
        viewid={viewid}
        viewpin={viewpin}
        checkAdd={checkAdd}
        file={list.file}
        img={list.img}
        viewitem={list.id}
      >
        {list.title}
      </ViewItem>
    )
  )

  return(
    <div className={cx('viewList-back')}>
      <div className={cx('viewList-items')}>
        {viewItem}
      </div>
    </div>
  );
}

export default ViewList;

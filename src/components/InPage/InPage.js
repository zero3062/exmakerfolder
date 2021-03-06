import React from 'react';
import styles from './InPage.scss';
import classNames from 'classnames/bind';
import InPageList from './../InPageList/InPageList';

const cx = classNames.bind(styles);

const InPage = ({ onBack, value, file, userid, pinnum, onCheck, viewpin, viewid, viewitem, handleStar, commentarr, commentnum }) => {

  return(
    <div className={cx('in-back')}>
      <div className={cx('in-bar')}></div>
      <div className={cx('in-contents')}>
        <div className={cx('in-title')}>
          <input className={cx('in-title-text')} value={value} readOnly/>
          <input className={cx('in-submit')} onClick={onBack} type="submit" value="확인"/>
        </div>
        <hr className={cx('in-top-line')}/>
        <div className={cx('in-list')}>
          <InPageList  onCheck={onCheck} handleStar={handleStar} file={file} viewid={viewid} viewpin={viewpin} viewitem={viewitem} commentarr={commentarr} commentnum={commentnum}/>
        </div>
        <hr className={cx('in-bottom-line')}/>
      </div>
    </div>
  );
}

export default InPage;

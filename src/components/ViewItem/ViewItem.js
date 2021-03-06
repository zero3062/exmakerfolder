import React, { useState } from 'react';
import styles from './ViewItem.scss';
import classNames from 'classnames/bind';
import InPage from './../InPage/InPage';

const cx = classNames.bind(styles);

const axios = require('axios');

function ViewItem({children, file, viewitem, viewid, viewpin, checkAdd, img}) {

  const [select, setSelect] = useState(false);
  const [star, setStar] = useState(0);
  const [avgrate, setAvgrate] = useState(0);
  const [commentarr, setCommentarr] = useState([]);
  const [commentnum, setCommentNum] = useState(0);

  const handleStar = () => {
    window.$('.starRev span').click(function(){
      console.log(star);
      window.$(this).parent().children('span').removeClass('on');
      window.$(this).addClass('on').prevAll('span').addClass('on');
      const starId = window.$(this).attr('id');
      console.log(starId);
      setStar(starId);
    });
  }

  const handleClick = (e) => {
    window.scrollTo(0, 0);
    setSelect(true);

    var array = [];
    axios.post(`http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_PORT}/api/use/loadcomment`, {
      pin: viewpin,
      sub_name: viewitem
    })
    .then(function(response) {
      response.data.comment.map((arr) => array.push(arr));
      setCommentNum(response.data.commentmany);
    })
    .catch(function (error) {
      console.log(error);
    });

    setCommentarr(array);
  }

  const handleBack = (e) => {

    setSelect(false);

    axios.post(`http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_PORT}/api/use/rate`, {
      id: viewid,
      pin: viewpin,
      sub_name: viewitem,
      rate: star
    })
    .then(function (response) {
      if(response.data.check === true) {
        checkAdd();
      }
    })
    .catch(function (error) {
      console.log(error);
    });

    axios.post(`http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_PORT}/api/use/rateche`, {
      pin: viewpin,
      sub_name: viewitem,
    })
    .then(function(response) {
      console.log(response.data.rate);
      if(isNaN(response.data.rate)) {
        setAvgrate(0);
      } else {
        setAvgrate(response.data.rate);
      }
    })
    .catch(function (error) {
      console.log(error);
    });

    axios.post(`http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_PORT}/api/use/sendelement`, {
      id: viewid,
      pin: viewpin,
      sub_name: viewitem,
    })
    .then(function (response) {
      console.log(response.data.check);
    })
    .catch(function (error) {
      console.log(error);
    });

    window.scrollTo({top: 134+532*(Number.parseInt((viewitem-1)/3)), left:0});
  }

  const handleClickBack = () => {
    setSelect(false);
    window.scrollTo({top: 134+532*(Number.parseInt((viewitem-1)/3)), left:0});
  }

  return(
    <div>
      <div className={cx('viewitem-back')} id={viewitem} onClick={handleClick}>
        <div className={cx('viewitem-title')}>{children}</div>
        <div className={cx('ratingnum')}>평점 : {parseFloat(avgrate).toFixed(1)}</div>
        <img src={img}/>
      </div>
      { (select === true) &&
        <div>
          <div className={cx('viewitem-opacity')} onClick={handleClickBack}></div>
          <div className={cx('inpage')}>
            <InPage onBack={handleBack}  value={children} file={file} viewpin={viewpin} viewid={viewid} viewitem={viewitem} handleStar={handleStar} commentarr={commentarr} commentnum={commentnum}/>
          </div>
        </div>
      }
    </div>
  );
}

export default ViewItem;

import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import styles from './ViewItem.scss';
import classNames from 'classnames/bind';
import InPage from './../InPage/InPage';

const cx = classNames.bind(styles);

const axios = require('axios');

function ViewItem({children, file, viewitem, viewid, viewpin, checkAdd, img}) {
  const location = useLocation();

  const [select, setSelect] = useState(false);
  const [apicheck, setApicheck] = useState(false);
  const [star, setStar] = useState(0);
  const [loca, setLoca] = useState()

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
    // if(apicheck == true) {
    //   alert("이미 설문에 응답하셨습니다.");
    // }
  }

  const handleBack = (e) => {
    // e.preventDefault();
    //
    // if(true){
    //   alert("다시 한번 확인해주세요.")
    // } else{
      setSelect(false);
    //
    //   axios.post(`http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_PORT}/api/use/answer`, {
    //     id: viewid,
    //     pin: viewpin,
    //     sub_name: viewitem,
    //   })
    //   .then(function (response) {
    //     console.log(response.data.check);
    //     if(response.data.check == true) {
    //       axios.post(`http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_PORT}/api/use/rate`, {
    //         id: viewid,
    //         pin: viewpin,
    //         sub_name: viewitem,
    //       })
    //       .then(function (response) {
    //         console.log(response.data.check);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //
    //       axios.post(`http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_PORT}/api/use/sendelement`, {
    //         id: viewid,
    //         pin: viewpin,
    //         sub_name: viewitem,
    //       })
    //       .then(function (response) {
    //         console.log(response.data.check);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //     } else {
    //       alert("이 설문에 참여할 수 없습니다.");
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    //
      // setApicheck(true);
    //
      checkAdd();
      window.scrollTo({top: 134+532*(Number.parseInt((viewitem-1)/3)), left:0});
    // }
  }

  const handleClickBack = () => {
    setSelect(false);
    window.scrollTo({top: 134+532*(Number.parseInt((viewitem-1)/3)), left:0});
  }






  return(
    <div>
      <div className={cx('viewitem-back')} id={viewitem} onClick={handleClick}>
        <div className={cx('viewitem-title')}>{children}</div>
        <img src={img}/>
      </div>
      { (select == true && apicheck != true) &&
        <div>
          <div className={cx('viewitem-opacity')} onClick={handleClickBack}></div>
          <div className={cx('inpage')}>
            <InPage onBack={handleBack}  value={children} file={file} viewpin={viewpin} viewid={viewid} handleStar={handleStar}/>
          </div>
        </div>
      }
    </div>
  );
}

export default ViewItem;

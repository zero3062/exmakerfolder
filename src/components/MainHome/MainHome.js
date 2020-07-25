import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './MainHome.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MainHome = () => {
  let history = useHistory();
  const location = useLocation();

  const [onejxeYQ, setOnejxeYQ] = useState(false);
  const [oneId, setOneId] = useState('');
  const [onePin, setOnePin] = useState('');

  useEffect(() => {
    if( typeof (location.state) !== 'undefined' && location.state != null) {
      const { id, pin, final } = location.state;
      if (pin === "jxeYQ") {
        setOnejxeYQ(final);
        setOneId(id);
        setOnePin(pin);
      }
    }
  })

  const pageNext = () => {
    history.push({
      pathname: '/pin',
      state: {
        jxeYQ: onejxeYQ,
        oneid: oneId,
        onepin: onePin,
      }
    })
  }

  return (
    <div className={cx('home-back')}>
      <div className={cx('home-contents')}>
        <div className={cx('main-title')}>EX-Maker</div>
        <div className={cx('main-buttons')}>
          <button className={cx('pin-button')} onClick={pageNext}>PIN</button>
        </div>
      </div>
    </div>
  );
}

export default MainHome;

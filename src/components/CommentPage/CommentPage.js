import React, { useState } from 'react';
import styles from './CommentPage.scss';
import classNames from 'classnames/bind';
import CommentList from './../CommentList/CommentList';

const cx = classNames.bind(styles);

const axios = require('axios');

const CommentPage = ({ viewid, viewpin, viewitem, commentarr, commentnum }) => {
  const [input, setInput] = useState('');
  const [click, setClick] = useState(false);
  const [lists, setLists] = useState(commentarr);
  const num = commentnum;
  const [textheight, setTextHeight] = useState('20px')

  const handleCommitAdd = () => {
    if(input !== ''){
      setLists([
        {
          id: viewid,
          comment: input,
        },
        ...lists,
      ]);

      axios.post(`http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_PORT}/api/use/comment`, {
        id: viewid,
        pin: viewpin,
        sub_name: viewitem,
        comment: input
      })
      .then(function(response) {
        console.log(response.data.check);
      })
      .catch(function (error) {
        console.log(error);
      });


      setClick(false);
      setInput('');
      setTextHeight('20px')
    }
  }

  const handleOnKeyEnter = (event) => {
    if(event.charCode === 13) {
      handleCommitAdd();
    }
  }


  const cmaTextareaSize = () => {
    var tesize = document.getElementById('textareaSize')
    tesize.style.height = '1px';
    tesize.style.height = (tesize.scrollHeight + 12) + 'px';
    setTextHeight(tesize.style.height);
  }

  return(
    <div className={cx('commentpage-back')}>
      <h4>댓글 {num}개</h4>
      <div className={cx('commentpage-user')}>
        <div className={cx('commentpage-icon')}></div>
        { click === true ?
          <div className={cx('commentpage-after')}>
            <textarea id="textareaSize" style={{height : textheight}} value={input} onChange={e => setInput(e.target.value)} placeHolder="공개 댓글 추가..." onKeyPress={handleOnKeyEnter} onKeyUp={cmaTextareaSize}/>
            <button className={cx('commentpage-push')} onClick={handleCommitAdd}>댓글</button>
            <button className={cx('commentpage-cancel')} onClick={e => {setClick(false);setInput('');setTextHeight('30px')}}>취소</button>
          </div>
          :
          <div className={cx('commentpage-before')}>
            <input value={input} className={cx('commentpage-input-before')} onClick={e => setClick(true)}  placeHolder="공개 댓글 추가..." readOnly />
          </div>
        }
      </div>
      <div style={{marginTop: textheight}} className={cx('commentpage-list')}>
        <CommentList lists={lists} viewid={viewid}/>
      </div>
    </div>
  );
}

export default CommentPage;

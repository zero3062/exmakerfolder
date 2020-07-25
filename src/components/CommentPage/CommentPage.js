import React, { useState } from 'react';
import styles from './CommentPage.scss';
import classNames from 'classnames/bind';
import CommentList from './../CommentList/CommentList';

const cx = classNames.bind(styles);

const CommentPage = ({ viewid }) => {
  const [input, setInput] = useState('');
  const [click, setClick] = useState(false);
  const [lists, setLists] = useState([]);
  const [num, setNum] = useState(0);

  const handleCommitAdd = () => {
    if(input != '') {
      setNum(num => num + 1);
      setLists([
        ...lists,
        {
          text: input,
          id: num,
        }
      ]);
      setClick(false);
      setInput('');
    }
  }

  const handleOnKeyEnter = (event) => {
    if(event.charCode == 13) {
      handleCommitAdd();
    }
  }

  return(
    <div className={cx('commentpage-back')}>
      <h4>댓글 {num}개</h4>
      <div className={cx('commentpage-user')}>
        <div className={cx('commentpage-icon')}></div>
        { click === true ?
          <div className={cx('commentpage-after')}>
            <input value={input} onChange={e => setInput(e.target.value)} placeHolder="공개 댓글 추가..." onKeyPress={handleOnKeyEnter}/>
            <button className={cx('commentpage-push')} onClick={handleCommitAdd}>댓글</button>
            <button className={cx('commentpage-cancel')} onClick={e => {setClick(false);setInput('');}}>취소</button>
          </div>
          :
          <div className={cx('commentpage-before')}>
            <input value={input} className={cx('commentpage-input-before')} onClick={e => setClick(true)}  placeHolder="공개 댓글 추가..." readOnly />
          </div>
        }
      </div>
      <div className={cx('commentpage-list')}>
        <CommentList lists={lists} viewid={viewid}/>
      </div>
    </div>
  );
}

export default CommentPage;

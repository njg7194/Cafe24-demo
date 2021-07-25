/*eslint-disable*/

import React, { useState } from 'react';
import './App.css';

function App() {

  let[modal, modalSet] = useState(false);

  return (
    <div className="navbar-fix">

      <div className="main-nav" onClick={ ()=>{modalSet(!modal)} }>
        <div>uStock</div>
      </div>

      <List></List>
      <List></List>
      <List></List>

      {
        modal === true
        ? <Modal></Modal>
        : null
      }

      <video>df</video>
    </div>
  );


}

function List() {

  let [man,manSet] = useState(['남자 코트 추천', '우동', '독학']);
  let [tb, tbSet] = useState(0);

  
  return(
    <div className="list">
      <h3> {man[0]} <span className="tabon" onClick={() => { tbSet(tb + 1) }}>❤</span>{tb}</h3>
      <p>7월 24일 발행함</p>
      <hr />
      <button className="changeVal" onClick={stateChange}>값 바꾸기</button>
    </div>
  )

  function stateChange() {
    if(man[0].includes('여자'))
      manSet(['남자 코트 추천', '우동', '독학']);
    else
    {
      var ex = [...man];
      ex = ['여자 코트 추천', '라면', '학원']
      manSet(ex);
      console.log(man);
    }
    
  }
}

function Modal() {
  console.log("모달");
  return(
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
    </div>
  )
}

export default App;

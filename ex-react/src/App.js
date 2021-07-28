/* eslint-disable */

import React, { useState } from 'react';
import './App.css';

function App() {

  let[modal, modalSet] = useState(false);
  let [man,manSet] = useState(['남자 코트 추천', '우동', '독학']);
  let [tb, tbSet] = useState(0);


  return (
    <div>
      <div className="main-nav" onClick={() => { modalSet(!modal) }}> uStock </div>



      {
        man.map((x) => {
          return (
            <div key={x.toString()} className="list">
              <h3> {x} <span className="tabon" onClick={() => { tbSet(tb + 1) }}>❤</span>{tb}</h3>
              <p>7월 24일 발행함</p>
              <hr />
              <button className="changeVal" onClick={stateChange}>값 바꾸기</button>
            </div>
          )
        })
      }

      {
        modal === true
          ? <Modal primename = {man}></Modal>
          : null
      }
    </div>
  );


  function stateChange() {
    if(man[0].includes('여자'))
      manSet(['남자 코트 추천', '우동', '독학']);
    else
    {
      var ex = [...man];
      ex = ['여자 코트 추천', '라면', '학원']
      manSet(ex);
    }
    
  }

}

function Modal(props) {
  return (
    <div className="modal">
      <div>
        <h2>{ props.primename[1] }</h2>
        <p>날짜</p>
      </div>
      <div className="modal-layer"></div>
    </div>
  )
}

export default App;

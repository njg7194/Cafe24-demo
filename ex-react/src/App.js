import React, { useState } from 'react';
import './App.css';

function App() {

  let [man,manSet] = useState('남자2 코트 추천');
  let posts = '뽀송이는 귀여웡';

  return (
    <div className="navbar-fix">
      <div className="main-nav">
        <div>uStock</div>
      </div>
      <navigator className="navbar">
      뿌잉뿌뿌잉
      </navigator>

      <div className="list">
        <h3> {man} </h3>
        <p>7월 24일 발행함</p>
        <hr />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/App';
import reportWebVitals from './reportWebVitals';

import { HashRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

let _store = [
  { id: 0, name: 'cool shoes', quan: 2 },
  { id: 1, name: 'bad ass', quan: 345 },
  //{ id: 2, name: 'White and Black', quan: 322}
];

function reducer(state = _store, action) {

  if (action.type === '+') {
    let tmp = [...state];
    tmp[action.id].quan++;
    //console.log(action.id);
    return tmp
  } else if (action.type === '-'){
    let tmp = [...state];
    tmp[action.id].quan--;
    console.log(action.id);
    return tmp
  } else if (action.type === '++') {
    let tmp = [...state];
    
    //현제 데이터에 받아온 데이터와 동일한 값 유무 판단.
    let found = tmp.findIndex(i => i.name === action.payload.name);
    if (found < 0) {// if None
      tmp.push(action.payload); 
    } else {        // if exist
      tmp[found].quan++;
    }
    return tmp
  } else {
    return state
  }
}

function reducer2(state = true, action){
  //console.log(action.type);
  if (action.type === 'off')return false
  else return state
}

let store = createStore(combineReducers({reducer, reducer2}));

//해쉬라우터는 브라우저 라우터에 비해 서버로 데잍를 잘못 요청할 일이 없어짐.

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

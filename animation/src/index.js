import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'; // Provider : 값을 공유하길 원하는 컴포넌트를 감싸주는 용도.
import { combineReducers, createStore} from 'redux';

function reducer(state, action) {
  if (action.type === 'set') {
    return "Var Setted";
  } else if (action.type === 'reset') {
    return "Var Resetted";
  } else {
    return "none";
  }
}

let store = createStore(combineReducers({ reducer }));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

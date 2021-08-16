import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/App';
import reportWebVitals from './reportWebVitals';

import { HashRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore(() => { return [{ id: 0, name: 'cool shoes', quan: 2 }] });

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

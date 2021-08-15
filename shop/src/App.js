/* eslint-disable */

import React, { useState, props, useEffect } from 'react';
import { link, Route, Switch } from 'react-router-dom';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from 'react-bootstrap';
import axios from 'axios';

import arrayData from './data.js';
import Spec from './Spec.js';

import './App.css';

//Context API : 같은 변수값을 공유할 범위 생성   
export let stockContext = React.createContext({});   

function App() {
  let [data, dataSet] = useState(arrayData);
  let [stock, stockSet] = useState([9, 10, 15]);

  useEffect(() => {
    //onsole.log(data);
  }, [data])



  return (
    <div className="App">

      {/* React Bootstrap : react-bootstrap 기본 Navbar 수정하여 적용함. */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" >uStock Analysist</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#/">Home</Nav.Link>
              <Nav.Link href="#/spec/1">Spec</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      {/* React Route : 리엑트 라우트시 단일 컴포넌트 표시를 위한 react-router-dom Switch */}
      <Switch>

        {/* React Route : 홈화면 라우팅 */}
        <Route exact path="/">
          <div>
            <div className="jumbotron">
              <h2>Hello World!</h2>
              <input></input>
            </div>


            <Shoelist data={data} ></Shoelist>
            {/* <Add_dataBTN data={ data } set={ ())=> dataSet() }></Add_dataBTN> */}
            <button className="btn btn-primary" onClick={() => {

              axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result) => { dataSet([...data, ...result.data]) })
                .catch(() => { })
            }}>더보기</button>
          </div>
        </Route>

        {/* React Route : 스펙 화면 라우팅 */}
        <Route path="/spec/:id">

          <stockContext.Provider value={{stock, stockSet}}>
            <Spec shoes={data} />
          </stockContext.Provider>

        </Route>

        {/* React Route : 예외 처리 라우팅 */}
        <Route path="/:id">
          <div>새로 만든 루트입니다.</div>
        </Route>

      </Switch>

    </div>
  );
}

// React Component : 신발 리스트 출력 컴포넌트.
function Shoelist(props) {

  // React Props : 프롭스 받아와서 리컴포넌트
  let tmp = [...props.data];

  return (
    <>

      <div className="container">
        <div className="row">
          {
            tmp.map((x, i) => {
              let shoe = i + 1;
              /*내 자신과의 싸움에서 지지는 않고 녹다운정도 된듯*/
              return (
                <div key={i} className="col-md-4">
                  <img src={'https://codingapple1.github.io/shop/shoes' + shoe + '.jpg'} width="100%" />
                  <h4>{x.title}</h4>
                  <p>{x.content}</p>
                </div>
              )
            })
          }
        </div>

      </div>

    </>
  )
}


// Ajax로 받은 값 프롭스로 받은 스테이트 변경 함수에 넣어서 적용시키기.
// 되긴 되는데 버튼 누르고 vscode에서 줄바꾸기 한번 하고 저장하니까 됨. 이해안감;
// 그리고 버튼 하나에 저렇게 주렁주렁 달리는거 개극혐인데 저거도 컴포넌트화 못시키나
// function Add_dataBTN(props) {

//   let tmp = [...props.data];

//   return(
//     <div>
//       <button className="btn btn-primary" onClick={()=>{
//           axios.get('https://codingapple1.github.io/shop/data2.json')
//           .then((result)=>{
//             tmp.push(...result.data);
//           })
//           .catch(()=>{
//             alert("데이터 수령 실패!");
//           })

//           props.set(tmp);
//           console.log(tmp);
//         }}>더보기</button>

//     </div>
//   )

// }

export default App;
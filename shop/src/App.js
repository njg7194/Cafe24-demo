

import './App.css';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Container} from 'react-bootstrap';
import importdata from './data.js'
import { useState, props } from 'react';


function App() {

  let[data,dataSet] = useState(importdata);


  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" >uStock Analysyst</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
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

      <div className="jumbotron">
        <h2>Hello World!</h2>
      </div>


      <Shoelist data = {data} ></Shoelist>


    </div>
  );
}

function Shoelist(props) {

  let tmp = [...props.data];

  return (
    <>

      <div className="container">
        <div className="row">
          {
            tmp.map((x, i) => {
              let shoe = i+1;
              return (
                <div key={i} className="col-md-4">
                  <img src={'https://codingapple1.github.io/shop/shoes' + shoe + '.jpg'} width="100%" />
                  <h4>{x.title}</h4>
                  <p>{x.content}</p>
                  console.log()
                </div>
              )
            })
          }
        </div>
      </div>

    </>
  )
}


export default App;

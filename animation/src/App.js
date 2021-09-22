import SpringEx from "./demo/reactSpring";
import MotionEx from "./demo/reactMotionEX";
import RTG from "./demo/react-transtition-group/rtgDemo";
import { useState } from "react";
import { CSSTransition, Transition } from "react-transition-group";
import { Button } from "react-bootstrap";

import {connect, useDispatch} from "react-redux";

import "./App.css";

function App(props) {
  const [inProp, setProp] = useState(true);
  const dispatch = useDispatch();

  const title = "react-motion";
  return (
    <div className="App">
      <SpringEx></SpringEx>

      <MotionEx myKey={title} delay={300} from={"left"}>
        <h1>{title}</h1>
      </MotionEx>

      <RTG />

      {/* CSSTransition에서 in프롭은 '변환된'값의 상태에 따라 in 또는 out 트렌지션 클래스를 실행함.
      ex) true -> false 시 out실행. / false -> true 시 in 실행. */}
      <CSSTransition in={inProp} timeout={1000} classNames="my-node" appear={true} mountOnEnter unmountOnExit>
        <div>
          <h1>{props.state}</h1>
          hellow
        </div>
      </CSSTransition>

      <Button variant="primary" onClick={() => {
        setProp(!inProp);
        if (inProp) {
          dispatch({type:'set'});
        } else {
          dispatch({type:'reset'});
        }
        }}>
        Clicked "{props.state}"
      </Button>
    </div>
  );
}


//index.js에서 만든 redux store에서 데이터를 가져와서 props로 변환해주는 함수.
//여기서 인자로 받는 "state가 "store" 라고 생각하면 됨."
function storeToProp(state) {
  
  return {
    state : state.reducer
  }
}

export default connect(storeToProp)(App);

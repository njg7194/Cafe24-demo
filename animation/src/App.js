import SpringEx from "./demo/reactSpring";
import MotionEx from "./demo/reactMotionEX";
import RTG from "./demo/react-transtition-group/rtgDemo";
import { useState } from "react";
import { CSSTransition, Transition } from "react-transition-group";
import { Button } from "react-bootstrap";

import "./App.css";

function App() {
  const [inProp, setProp] = useState(false);

  const title = "HEllow";
  return (
    <div className="App">
      <SpringEx></SpringEx>

      <MotionEx myKey={title} delay={300} from={"left"}>
        <h1>{title}</h1>
      </MotionEx>

      <RTG />
      <Transition in={inProp} timeout={500}>
        {(state) => <div className={`fade fade-${state}`} />}
      </Transition>
      <CSSTransition in={inProp} timeout={1000} classNames="my-node">
        <div>
          <h1>HELLLLLOOOOWWWW</h1>
        </div>
      </CSSTransition>
      <Button variant="primary" onClick={() => setProp(!inProp)}>
        Click to Enter
      </Button>
    </div>
  );
}

export default App;


import './App.css';

import SpringEx from './demo/reactSpring'
// import MotionEx from './demo/reactMotionEX'

function App() {

  const title="HEllow"
  return (
    <div className="App">
      <SpringEx></SpringEx>
      {/* <MotionEx myKey={title} delay={300} from={"left"}>
        <h1>{title}</h1>
      </MotionEx> */}
    </div>
  );
}

export default App;

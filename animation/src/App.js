
import './App.css';

import Demo from './demo/demo'
import MotionEx from './demo/reactMotionEX'

function App() {

  const title="HEllow"
  return (
    <div className="App">
      {/* <Demo></Demo> */}
      <MotionEx myKey={title} delay={300} from={"left"}>
        <h1>{title}</h1>
      </MotionEx>
    </div>
  );
}

export default App;

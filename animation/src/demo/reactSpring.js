import { useSpring, animated } from 'react-spring'

function SpringEx() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
  return <animated.div style={props}><h1>react-spring</h1></animated.div>
}

export default SpringEx;
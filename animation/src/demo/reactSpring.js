import { useSpring, animated } from 'react-spring'

function SpringEx() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
  return <animated.div style={props}><h1>I will fade in</h1></animated.div>
}

export default SpringEx;
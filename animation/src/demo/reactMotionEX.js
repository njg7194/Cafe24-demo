import React, { useState, useEffect } from "react";
import { Motion, spring } from "react-motion";

const MotionEx = (props) => {
  const [timer, setTimer] = useState(null);
  const [delayed, setDelayed] = useState(true);

  const delay = props.delay || 0;
  const key = props.myKey || "";

  useEffect(() => {
    if (timer !== null) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(function () {
        setDelayed(false);
      }, delay)
    );

    return () => {
      setDelayed(true);
      clearTimeout(timer);
    };
  }, [key]);

  if (delayed) {
    return <div style={{ visibility: "hidden" }}>{props.children}</div>;
  }

  return (
    <div>
      <Motion
        key={key}
        defaultStyle={{ x: -100, opacity: 0 }}
        style={{
          x: spring(0),
          opacity: spring(1, { stiffness: 50, damping: 40 }),
        }}
      >
        {(interpolatingStyle) => {
          let transform = "";
          if (props.from === "top")
            transform = `translateY(${interpolatingStyle.x}px)`;
          if (props.from === "bottom")
            transform = `translateY(${-interpolatingStyle.x}px)`;
          if (props.from === "left")
            transform = `translateX(${interpolatingStyle.x}px)`;
          if (props.from === "right")
            transform = `translateX(${-interpolatingStyle.x}px)`;
          return (
            <div
              style={{
                transform: transform,
                opacity: interpolatingStyle.opacity,
              }}
            >
              {props.children}
            </div>
          );
        }}
      </Motion>
    </div>
  );
};

export default MotionEx;

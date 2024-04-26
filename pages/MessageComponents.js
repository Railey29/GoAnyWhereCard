import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function MessageComponents() {
  const [isVisibleDesktop, setIsVisibleDesktop] = useState(false);
  const [isVisibleMobile, setIsVisibleMobile] = useState(false);

  const [refDesktop, inViewDesktop] = useInView({
    // true if the view is Desktop
    threshold: 0.5,
  });
  const [refMobile, inViewMobile] = useInView({
    // true if the view is mobile
    threshold: 0.5,
  });

  useEffect(() => {
    setIsVisibleDesktop(inViewDesktop);
  }, [inViewDesktop]);

  useEffect(() => {
    setIsVisibleMobile(inViewMobile);
  }, [inViewMobile]);

  const styleForDesktop = {
    backgroundColor: "white",
    margin: "0",
    padding: "0",
  };
  const styleForMobile = {
    backgroundColor: "black",
    margin: "0",
    padding: "0",
  };
  return (
    <>
      <div
        className={`container d-none d-md-block`}
        ref={refDesktop}
        style={styleForDesktop}
      ></div>
      <div
        className={`containerMobile d-md-none`}
        ref={refMobile}
        style={styleForMobile}
      ></div>
    </>
  );
}

export default MessageComponents;

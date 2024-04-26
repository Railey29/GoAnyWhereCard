import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function HomeComponents() {
  const [isVisibleDesktop, setIsVisibleDesktop] = useState(false);
  const [isVisibleMobile, setIsVisibleMobile] = useState(false);

  const [refDesktop, inViewDesktop] = useInView({
    threshold: 0.5,
  });

  const [refMobile, inViewMobile] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    setIsVisibleDesktop(inViewDesktop);
  }, [inViewDesktop]);

  useEffect(() => {
    setIsVisibleMobile(inViewMobile);
  }, [inViewMobile]);

  const ViewDesktop = {
    margin: "0",
    padding: "0",
  };
  const ViewMobile = {
    margin: "0",
    padding: "0",
  };
  const h1 = {
    color: "white",
    position: "absolute",
    left: "10px",
  };
  const mobileView = {
    color: "white",
    position: "absolute",
    left: "10px",
  };
  return (
    <>
      <div
        className={`container d-none d-md-block animate__animated ${
          isVisibleDesktop ? "animate__slideInLeft" : "animate__slideOutLeft"
        }`}
        style={ViewDesktop}
        ref={refDesktop}
      >
        <h1 style={h1}>DesktopView</h1>
      </div>
      <div
        className={`containerMobile d-md-none animate__animated ${
          isVisibleMobile ? "animate__slideInLeft" : "animate__slideOutLeft"
        }`}
        style={{ margin: "0", padding: "0" }}
        ref={refMobile}
      >
        <h1 style={mobileView}>Mobile View</h1>
      </div>
    </>
  );
}

export default HomeComponents;

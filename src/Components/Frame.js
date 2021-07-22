import React from "react";

export default function Frame({coord}) {
  const [w,h] = [30,50]
  return (
    <div
      style={{
        // Same referential as pageX,pageY, centered
        top: coord[1]-25 + "px",
        left: coord[0]-15 + "px",
        // Display if coord are given
        display: !!coord.length ? "flex":"none",
        position: "absolute",
        zIndex:"1000",
        width: w+"px",
        height: h+"px",
        border: "1px solid black",
        backgroundColor: "rgba(240,240,240,0.4)",
      }}
    ></div>
  );
}

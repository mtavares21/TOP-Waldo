import React from "react";

export default function Marker({ coord }) {
  return (
    <div
      style={{
        left:coord[0]-95+"px",
        top:coord[1]-175+"px",
        position: "absolute",
        zIndex:"1000",
        margin: "0",
        width: "50px",
        height: "50px",
        border: `5px solid red`,
        borderRadius: "50%",
        background: "transparent",
      }}
    ></div>
  );
}

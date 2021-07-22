import React from "react";

export default function Header() {
  return (
      <header
        style={{
          backgroundColor: "#F71735",
          height: "100px",
          width: "100%",
          display:"flex",
          alignItems:"center"
        }}
      >
        <h1 style={{
          color: "rgb(220,250,250)",
          margin: "0",
          marginLeft:"20px",
          fontSize:"46px"
        }}>Where is Waldo? </h1>
      </header>
  );
}

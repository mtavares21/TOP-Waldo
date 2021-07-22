import React from "react";

export default function ScoreList({scores}) {
  return (
    <div
      style={{
        display: !!scores.length ? "flex" : "none",
        flexWrap: "noWrap",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div style={{ marginRight: "50px" }}>
        <h2 style={{ margin: 0 }}> Place </h2>
        <ol style={{ listStyle: "none", padding: 0, textAlign: "center" }}>
          {scores.map((score, index) => (
            <li key={index}>{index + 1 + "."}</li>
          ))}
        </ol>
      </div>
      <div style={{ marginRight: "50px" }}>
        <h2 style={{ margin: 0, textAlign: "center" }}> Player </h2>
        <ol style={{ listStyle: "none", padding: 0, textAlign: "center" }}>
          {scores.map((score, index) => (
            <li key={index}>{score.name}</li>
          ))}
        </ol>
      </div>
      <div>
        <h2 style={{ margin: 0 }}> Time </h2>
        <ol style={{ listStyle: "none", padding: 0, textAlign: "center" }}>
          {scores.map((score, index) => (
            <li key={index}>{new Date( score.time * 1000).toISOString().substr(11, 8)}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

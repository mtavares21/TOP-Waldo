import React from "react";

export default function ScoreForm({ show, handleNewScore, time }) {
  return (
    <form style={{ margin: "10px", display: show ? "block" : "none" }}>
      <h3> Add your time:</h3>
      <div>
        <label>Name:</label>
        <input
          style={{ position: "relative", left: "10px" }}
          type="text"
          required
        />
        <button
          style={{ position: "relative", left: "20px" }}
          type="button"
          onClick={handleNewScore}
        >
          Submit
        </button>
        <h1>{ typeof(time)===Number ? new Date( time * 1000).toISOString().substr(11, 8):null}</h1>
      </div>
    </form>
  );
}

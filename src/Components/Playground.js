import React from "react";
import { useState, useCallback, useEffect } from "react/cjs/react.development";
import { v4 as uuidv4 } from "uuid";
import Play from "./Play";
import Image from "./Image";
import Frame from "./Frame";
import List from "./List";
import Marker from "./Marker";
export default function Playground({
  isGameOver,
  image,
  setTimer,
  startServerTimer,
  charFound,
  char,
  setCharFound,
  timer,
}) {
  // Current frame coordinates
  const [coord, setCoord] = useState([]);

  const handleImageClick = (e) => {
    e.stopPropagation();
    return isGameOver()
      ? alert("You already found everybody! Congrats")
      : setCoord((prev) => [e.pageX, e.pageY]);
  };

  // Start timer
  function startTimer() {
    const id = uuidv4();
    setTimer((prev) => id);
    startServerTimer(id);
  }
  // Render marker on found characters
  const renderMarker = () => {
    return (
      <div>
        {charFound.map((item) => (
          <Marker coord={item.coord} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <Frame coord={coord} />
      <List
        coord={coord}
        setCoord={setCoord}
        char={char}
        setTimer={setTimer}
        setCharFound={setCharFound}
        isGameOver={isGameOver}
        timer={timer}
        image={image}
      />
      {!!charFound.length ? renderMarker() : null}
      <div className="containPlay">
        <Image image={image} onClick={!!timer ? handleImageClick : null} />
        <Play onClick={startTimer} show={!!timer} />
      </div>
    </div>
  );
}

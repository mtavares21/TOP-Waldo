import React from "react";
import { useState } from "react";
import Play from "./Play";
import Image from "./Image";
import Frame from "./Frame";
import List from "./List";
import Marker from "./Marker";

export default function Playground({
  currImage,
  isGameOver,
  charFound,
  char,
  dispatchImage,
  setTimer,
  timer,
  startTimer,
}) {
  // Current frame coordinates
  const [coord, setCoord] = useState({ page: [], layer: [] });

  const handleImageClick = (e) => {
    return isGameOver()
      ? null
      : setCoord((prev) => ({
          page: [e.pageX, e.pageY],
          layer: [e.nativeEvent.layerX, e.nativeEvent.layerY],
        }));
  };
  // Render marker on found characters
  const renderMarker = () => {
    return (
      <div>
        {charFound.map((item) => (
          <Marker key={item.pageCoord} coord={item.pageCoord} />
        ))}
      </div>
    );
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Frame coord={coord.page} />
      <List
        coord={coord}
        setCoord={setCoord}
        setTimer={setTimer}
        isGameOver={isGameOver}
        timer={timer}
        currImage={currImage}
        dispatchImage={dispatchImage}
        char={char}
        charFound={charFound}
      />
      {!!charFound.length ? renderMarker() : null}
      <div className="containPlay">
        <Image image={currImage} onClick={!!timer ? handleImageClick : null} />
        <Play onClick={startTimer} show={!!timer} />
      </div>
    </div>
  );
}

import React from "react";
import { stopServerTimer } from "../data";
import styles from "./list.module.css";
import { finder } from "../finder";

export default function List({
  coord,
  setCoord,
  char,
  timer,
  setTimer,
  setCharFound,
  isGameOver,
  image
}) {
  // Search for characters in the current frame
  const charInFrame = () => {
    const charInTheFrame = image.char.filter((char) =>
      finder(char.coord, [coord[0], coord[1]], [30, 50])
    );
    return !!charInTheFrame.length ? charInTheFrame[0] : null;
  };

  const handleSelectedChar = (event, char) => {
    event.stopPropagation();
    if (charInFrame().name === char.name) {
      // Correct listed character
      console.log("You found " + char.name);
      setCharFound((prev) => prev.concat(charInFrame()));
      setCoord((prev) => 0);
      if (isGameOver()) {
        // Coorrect character was last to be found
        stopServerTimer(timer);
        setTimer(0);
      }
    } else console.log("Wrong character!"); // Incorrect character
  };
  return (
    <div>
      <ul
        style={{
          display: !!coord.length ? "flex" : "none",
          left: coord[0] - 44 + "px",
          top: coord[1] - 187 + "px",
        }}
        className={styles.list}
      >
        {!!charInFrame() ? (
          char.map((item) => (
            <li
              className={styles.li}
              key={char + item.name}
              onClick={(e) => handleSelectedChar(e, item)}
            >
              <input className={styles.input} type="button" value={item.name} />
            </li>
          ))
        ) : (
          <li className={styles.li}>No characters</li>
        )}
      </ul>
    </div>
  );
}

import React from "react";
import styles from "./list.module.css";
import { finder } from "../finder";

export default function List({
  coord,
  setCoord,
  char,
  dispatchImage,
  timer,
  setTimer,
  isGameOver,
  currImage,
}) {
  // Search for characters in the current frame
  const charInFrame = () => {
    const charInTheFrame = currImage.char.filter((char) =>
      finder(char.coord, [coord.layer[0], coord.layer[1]], [30, 50])
    );
    return !!charInTheFrame.length ? charInTheFrame[0]: null ;
  };

  const handleSelectedChar = (event, char) => {
    event.stopPropagation();
    if (charInFrame()) {
      if (charInFrame().name === char.name) {// Correct listed character
        //Give page coordinates to charFound
        const charFoundWithCoord = Object.assign({},charInFrame(), {pageCoord:coord.page} );
        dispatchImage({ type: "char found", charFound: charFoundWithCoord});
        setCoord((prev) => ({page:[],layer:[]}));
      }
    } else setCoord(prev =>({page:[],layer:[]}))
  };
  return (
    <div>
      <ul
        style={{
          display: !!coord.page.length ? "flex" : "none",
          left: coord.page[0]+15 + "px",
          top: coord.page[1]-37 + "px",
        }}
        className={styles.list}
      >
        {char.map((item) => (
          <li
            className={styles.li}
            key={char + item.name}
            onClick={(e) => handleSelectedChar(e, item)}
          >
            <input className={styles.input} type="button" value={item.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

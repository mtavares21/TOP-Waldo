import { useState } from "react";
import * as _ from "lodash";
import "./App.css";
import Header from "./Components/Header";
import { getImage, startServerTimer } from "./data";
import { useEffect, useCallback } from "react/cjs/react.development";
import Playground from "./Components/Playground";

export default function App() {
  const [image, setImage] = useState({
    src:
      "https://3hwuuuxcz5o651g144s0kw10-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/G3M_Wheres_Waldo.jpg",
    char: [
      { name: "Waldo", coord: [986, 187] },
      { name: "Oldlaw", coord: [115, 661] },
    ],
  });
  // Initial char will be updated when user finds a character
  let initialChar = _.cloneDeep(image.char);
  // Current characters names to be found
  const [char, setChar] = useState(initialChar);
  // Found characters
  const [charFound, setCharFound] = useState([]);
  // Timer (on/off)
  const [timer, setTimer] = useState(0);
  // Get other image
  function getNewImage(image) {
    getImage(image).then((doc) => setImage((img) => doc));
  }
  const isGameOver = useCallback(() => charFound.length === char.length, [
    char,
    charFound,
  ]);

  useEffect(() => {
    if (isGameOver()) {
      setTimer(0);
    }
  }, [isGameOver]);

  return (
    <div className="App">
      <Header />
      <div className="playWrap">
        <Playground
          isGameOver={isGameOver}
          image={image}
          setTimer={setTimer}
          startServerTimer={startServerTimer}
          charFound={charFound}
          char={char}
          setCharFound={setCharFound}
          timer={timer}
        />
      </div>
    </div>
  );
}

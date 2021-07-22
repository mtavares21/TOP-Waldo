import React from "react";
import { useReducer, useState, useCallback, useEffect } from "react";
import {
  startServerTimer,
  stopServerTimer,
  deleteServerTimer,
  getServerTimer,
} from "./data";
import { v4 as uuidv4 } from "uuid";
import * as _ from "lodash";
import "./App.css";
import Header from "./Components/Header";
import { loadImages } from "./data";
import Playground from "./Components/Playground";
import Gallery from "./Components/Gallery";
import ScoreBoard from "./Components/ScoreBoard";

const initialStateImage = {
  images: [],
  currImage: null,
  char: [],
  charFound: [],
};

function reducerImage(stateImage, action) {
  const { images, currImage, char, charFound } = stateImage;
  if (action.type === "default image") {
    //Default image and respective
    return { images, currImage: images[0], char: images[0].char, charFound };
  } else if (action.type === "add images") {
    return { images: action.images, currImage, char, charFound: [] };
  } else if (action.type === "select image") {
    return {
      images,
      currImage: action.image,
      char: action.image.char,
      charFound: [],
    };
  } else if (action.type === "char found") {
    //Adds found character and updates char to be found
    return {
      images,
      currImage,
      char: char.filter((char) => char.name !== action.charFound.name),
      charFound: charFound.concat(action.charFound),
    };
  } else if (action.type === "reset") {
    return {
      images,
      currImage: images[0],
      char: images[0].char,
      charFound: [],
    };
  } else {
    throw new Error();
  }
}

export default function App() {
  // Timer (on/off)
  const [timer, setTimer] = useState(0);
  // Score time
  const [scoreTime, setScoreTime] = useState(null);
  // Image reducer
  const [stateImage, dispatchImage] = useReducer(
    reducerImage,
    initialStateImage
  );
  const { images, currImage, char, charFound } = stateImage;
  // Is game over ?
  const isGameOver = useCallback(
    () => char.length === 0 && !!charFound.length,
    [charFound, char]
  );
  useEffect(() => {
    const loadedImages = [];
    loadImages()
      .then((querySnapshot) => {
        querySnapshot.forEach((image) => loadedImages.push(image.data()));
        dispatchImage({
          type: "add images",
          images: _.cloneDeep(loadedImages),
        });
        dispatchImage({ type: "default image" });
      })
      .catch((error) => console.log(error));
  }, [dispatchImage]);
  // Start timer
  function startTimer(e) {
    e.stopPropagation();
    const id = uuidv4();
    setTimer((prev) => id);
    startServerTimer(id);
  }
  // Stop and setScore when game is over
  useEffect(() => {
    if (isGameOver()) {
      stopServerTimer(timer).then((e) =>
        getServerTimer(timer).then((doc) => {
          const time = doc.stop - doc.start;
          setScoreTime(Math.round(time * 100) / 100);
        })
      );
    }
    return () => (isGameOver() ? deleteServerTimer(timer) : null);
  }, [isGameOver, timer]);

  const handleNewImage = (img) => {
    dispatchImage({type:"select image", image: img})
    setTimer(prev=>0)
  }
  return (
    <div className="App">
      <Header />
      <Gallery images={images} handleNewImage={handleNewImage} />
      <div className="playWrap">
        {isGameOver() && !!scoreTime ? (
          <ScoreBoard
            time={scoreTime}
            setTime={setScoreTime}
            setTimer={setTimer}
            dispatchImage={dispatchImage}
            currImage={currImage.name}
          />
        ) : null}
        {!!currImage ? (
          <Playground
            isGameOver={isGameOver}
            setTimer={setTimer}
            timer={timer}
            startTimer={startTimer}
            dispatchImage={dispatchImage}
            char={char}
            charFound={charFound}
            currImage={currImage}
          />
        ) : null}
      </div>
    </div>
  );
}

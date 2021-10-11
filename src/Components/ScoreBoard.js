import React, { useCallback } from "react";
import { useState, useEffect, useRef } from "react";
import { getServerScores, setServerScore } from "../data";
import styles from "./scoreBoard.module.css";
import ScoreForm from "./ScoreForm";
import ScoreHeader from "./ScoreHeader";
import ScoreList from "./ScoreList";

export default function ScoreBoard({
  time,
  setTime,
  dispatchImage,
  setTimer,
  currImage,
}) {
  const [scores, setScores] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const refContainer = useRef(null);

  // Get data and set state
  const populateScores = () => {
    const newScores = [];
    getServerScores(currImage).then((docs) => {
      docs.forEach((doc) => {
        const score = { name: doc.data().name, time: doc.data().time };
        newScores.push(score);
      });
      setScores((prev) => newScores);
      setShowForm((prev) => false);
      setTime((prev) => "submited");
    });
  };
  // Submit new score, if there's one
  const handleNewScore = (e) => {
    if (e.target.form[0].value !== "") {
      const userName = e.target.form[0].value;
      setServerScore(currImage, userName, time);
      populateScores();
    } else populateScores();
  };
  // Reset is dependent on scores so the event.listener effect only runs after score submit
  const reset = useCallback(() => {
    if (!!scores.length) {
      setShowForm((prev) => true);
      setScores((prev) => []);
      dispatchImage({ type: "reset" });
      setTimer((prev) => 0);
    }
  }, [dispatchImage, scores, setTimer]);
  // Reset scores when user clicks outside div
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        refContainer.current &&
        !refContainer.current.contains(event.target) &&
        time
      ) {
        reset();
      }
    }
    // Bind the event listener
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside);
    };
  }, [refContainer, reset, time]);
  return (
    <div className={styles.wrapper}>
      <div
        ref={refContainer}
        style={{ width: "400px", backgroundColor: "white" }}
      >
        <ScoreHeader />
        <ScoreForm
          show={showForm}
          handleNewScore={handleNewScore}
          time={time}
        />
        <ScoreList scores={scores} />
      </div>
    </div>
  );
}

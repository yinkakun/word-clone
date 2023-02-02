import React from "react";
import { range } from "../../utils";
import { Guess } from "../Guess/Guess";

export const GuessResults = ({ guesses, answer }) => {
  return (
    <div className="guess-results">
      {range(0, 6).map((index) => {
        return (
          <Guess index={index} guesses={guesses} answer={answer} key={index} />
        );
      })}
    </div>
  );
};
